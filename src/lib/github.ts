export type MostActiveDeveloper = {
  login: string;
  name: string;
  avatarUrl: string;
  createdAt: string;
  bio: string;
  contributions: number;
};

export type CommunityStats = {
  developers: number;
  humans: number;
  agents: number;
  contributions: number;
  pulls: number;
  forks: number;
  live: boolean;
  mostActiveDeveloper: MostActiveDeveloper | null;
};

// Snapshot taken from the GitHub API (LoBot-LLC org) — used when the API is unreachable/rate-limited.
export const FALLBACK_STATS: CommunityStats = {
  developers: 9,
  humans: 6,
  agents: 3,
  contributions: 276,
  pulls: 66,
  forks: 6,
  live: false,
  mostActiveDeveloper: null,
};

const ORG = "LoBot-LLC";
const headers = { Accept: "application/vnd.github+json", "User-Agent": "lobot-website" };

async function gh(url: string): Promise<Response> {
  const res = await fetch(url, { headers, next: { revalidate: 3600 }, signal: AbortSignal.timeout(6000) });
  if (!res.ok) throw new Error(`GitHub ${res.status}`);
  return res;
}

/** Count items of a paginated list endpoint by reading the `last` page from the Link header. */
async function countViaLink(url: string): Promise<number> {
  const res = await gh(`${url}${url.includes("?") ? "&" : "?"}per_page=1`);
  const link = res.headers.get("link");
  const m = link?.match(/[?&]page=(\d+)>;\s*rel="last"/);
  if (m) return Number(m[1]);
  const body = (await res.json()) as unknown[];
  return Array.isArray(body) ? body.length : 0;
}

type Repo = { name: string; forks_count: number; fork: boolean };
type Contributor = { login?: string; type: string; contributions: number };

/** Aggregate total commits per contributor across all org repos (including future ones) and return the most active developer. */
export async function getMostActiveDeveloper(): Promise<MostActiveDeveloper | null> {
  try {
    const repos = (await (await gh(`https://api.github.com/orgs/${ORG}/repos?per_page=100`)).json()) as Repo[];
    const own = repos.filter((r) => !r.fork);

    // Aggregate commits per contributor login across all repos
    const perDeveloper = new Map<string, number>();

    for (const repo of own) {
      const base = `https://api.github.com/repos/${ORG}/${repo.name}`;
      const contribRes = await gh(`${base}/contributors?per_page=100&anon=1`).then((r) => (r.status === 204 ? [] : r.json())).catch(() => []);
      const contribs = (contribRes as Contributor[]) ?? [];
      for (const c of contribs) {
        const key = c.login ?? `anon-${repo.name}`;
        const current = perDeveloper.get(key) ?? 0;
        perDeveloper.set(key, current + (c.contributions ?? 0));
      }
    }

    if (perDeveloper.size === 0) return null;

    // Find the developer with the most commits
    let topLogin: string | null = null;
    let topCommits = 0;
    for (const [login, total] of perDeveloper) {
      if (total > topCommits) {
        topCommits = total;
        topLogin = login;
      }
    }

    if (!topLogin) return null;

    // Fetch the user profile
    const userRes = await gh(`https://api.github.com/users/${encodeURIComponent(topLogin)}`);
    const user = (await userRes.json()) as {
      name?: string;
      login: string;
      avatar_url?: string;
      created_at?: string;
      bio?: string;
    };

    return {
      login: user.login ?? topLogin,
      name: user.name ?? user.login ?? topLogin,
      avatarUrl: user.avatar_url ?? "",
      createdAt: user.created_at ?? "",
      bio: user.bio ?? "",
      contributions: topCommits,
    };
  } catch {
    return null;
  }
}

export async function getCommunityStats(): Promise<CommunityStats> {
  try {
    const repos = (await (await gh(`https://api.github.com/orgs/${ORG}/repos?per_page=100`)).json()) as Repo[];
    const own = repos.filter((r) => !r.fork);
    let forks = 0;
    let contributions = 0;
    let pulls = 0;
    const humans = new Set<string>();
    const agents = new Set<string>();

    for (const repo of own) {
      forks += repo.forks_count;
      const base = `https://api.github.com/repos/${ORG}/${repo.name}`;
      const [commits, prs, contribRes] = await Promise.all([
        countViaLink(`${base}/commits`).catch(() => 0),
        countViaLink(`${base}/pulls?state=all`).catch(() => 0),
        gh(`${base}/contributors?per_page=100&anon=1`).then((r) => (r.status === 204 ? [] : r.json())).catch(() => []),
      ]);
      contributions += commits;
      pulls += prs;
      (contribRes as Contributor[]).forEach((c, idx) => {
        const key = c.login ?? `anon-${repo.name}-${idx}`;
        if (c.type === "Bot" || key.endsWith("[bot]")) agents.add(key);
        else humans.add(key);
      });
    }

    if (contributions === 0) return FALLBACK_STATS;
    const mad = await getMostActiveDeveloper();
    return {
      developers: humans.size + agents.size,
      humans: humans.size,
      agents: agents.size,
      contributions,
      pulls,
      forks,
      live: true,
      mostActiveDeveloper: mad,
    };
  } catch {
    const mad = await getMostActiveDeveloper();
    return {
      ...FALLBACK_STATS,
      mostActiveDeveloper: mad,
    };
  }
}
