#!/usr/bin/env python3
"""
most_active_project.py

Determines the LoBot-LLC organization repository with the most commits
using the GitHub REST API (standard library only).
"""

import json
import re
import time
import urllib.request
import urllib.error

ORG = "LoBot-LLC"
BASE_URL = "https://api.github.com"
REQUEST_DELAY = 1.0  # seconds between requests
USER_AGENT = "most-active-project-script/1.0"


def _open_url(url, token=None):
    """Open a URL and return the raw response body as bytes."""
    headers = {"User-Agent": USER_AGENT}
    if token:
        headers["Authorization"] = f"token {token}"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read(), resp.headers


def fetch_all_repos(token=None):
    """Fetch all repositories for the organization, following pagination."""
    repos = []
    url = f"{BASE_URL}/orgs/{ORG}/repos?per_page=100"
    page = 1

    while url:
        print(f"Fetching repos page {page} ...")
        body, headers = _open_url(url, token)
        data = json.loads(body.decode("utf-8"))
        if not isinstance(data, list):
            raise ValueError(f"Unexpected response shape: {type(data)}")
        repos.extend(data)

        # Follow Link header pagination if present
        link = headers.get("Link", "")
        url = _next_link(link)
        page += 1
        if url:
            time.sleep(REQUEST_DELAY)

    return repos


def _next_link(link_header):
    """
    Parse the Link header and return the URL for rel="next", or None.

    Example Link header:
      <https://api.github.com/orgs/LoBot-LLC/repos?page=2>; rel="next",
      <https://api.github.com/orgs/LoBot-LLC/repos?page=5>; rel="last"
    """
    if not link_header:
        return None
    for part in link_header.split(","):
        match = re.search(r'<([^>]+)>\s*;\s*rel="([^"]+)"', part)
        if match and match.group(2) == "next":
            return match.group(1)
    return None


def get_commit_count(repo_name, token=None):
    """
    Retrieve total commit count for a repository.

    Calls:
      GET /repos/LoBot-LLC/{repo_name}/commits?per_page=1

    Parses the Link header for rel="last" to extract the last page number,
    which equals the total commit count. If no Link header is present,
    counts the commits returned in the response body.
    """
    url = f"{BASE_URL}/repos/{ORG}/{repo_name}/commits?per_page=1"
    body, headers = _open_url(url, token)

    link = headers.get("Link", "")
    last_page = _last_page(link)
    if last_page is not None:
        return last_page

    # Fallback: count commits in the response body
    data = json.loads(body.decode("utf-8"))
    if isinstance(data, list):
        return len(data)
    return 0


def _last_page(link_header):
    """Extract the page number from rel="last" in the Link header."""
    if not link_header:
        return None
    for part in link_header.split(","):
        match = re.search(r'<([^>]+)>\s*;\s*rel="([^"]+)"', part)
        if match and match.group(2) == "last":
            last_url = match.group(1)
            # Extract page query parameter
            page_match = re.search(r'[?&]page=(\d+)', last_url)
            if page_match:
                return int(page_match.group(1))
    return None


def main():
    token = None  # Set GITHUB_TOKEN env var or replace here for private repos / higher rate limits
    import os
    token = os.environ.get("GITHUB_TOKEN")

    try:
        repos = fetch_all_repos(token)
    except urllib.error.HTTPError as e:
        print(f"Error fetching repositories: HTTP {e.code} {e.reason}")
        return 1
    except urllib.error.URLError as e:
        print(f"Error fetching repositories: {e.reason}")
        return 1
    except Exception as e:
        print(f"Unexpected error fetching repositories: {e}")
        return 1

    if not repos:
        print("No repositories found for organization.")
        return 1

    print(f"Found {len(repos)} repository(ies). Checking commit counts...\n")

    best_repo = None
    best_count = -1

    for i, repo in enumerate(repos, start=1):
        name = repo.get("name", "unknown")
        try:
            count = get_commit_count(name, token)
        except urllib.error.HTTPError as e:
            print(f"[{i}/{len(repos)}] {name}: HTTP {e.code} {e.reason} — skipping")
            time.sleep(REQUEST_DELAY)
            continue
        except urllib.error.URLError as e:
            print(f"[{i}/{len(repos)}] {name}: network error — {e.reason} — skipping")
            time.sleep(REQUEST_DELAY)
            continue
        except Exception as e:
            print(f"[{i}/{len(repos)}] {name}: unexpected error — {e} — skipping")
            time.sleep(REQUEST_DELAY)
            continue

        print(f"[{i}/{len(repos)}] {name}: {count} commits")
        if count > best_count:
            best_count = count
            best_repo = name

        time.sleep(REQUEST_DELAY)

    if best_repo is None:
        print("Could not determine the most active repository.")
        return 1

    print(f"\nMost active repository: {best_repo} with {best_count} commits")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())