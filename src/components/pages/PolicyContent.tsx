"use client";

import { useApp } from "../Providers";
import { NumberBadge, PageHero, Section, SectionHeader } from "../ui";

const employeeIcons = ["🤝", "✅", "🚭", "🛡️", "🔒", "🤫", "🎉"];

export function PolicyContent() {
  const { t } = useApp();
  const p = t.policy;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      <Section id="employees">
        <SectionHeader title={p.employees.title} subtitle={p.employees.subtitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.employees.items.map((rule, i) => (
            <div key={rule.title} className="card card-hover">
              <span className="text-3xl">{employeeIcons[i % employeeIcons.length]}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {i + 1}. {rule.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{rule.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="applicants" className="bg-slate-50 dark:bg-white/[0.015]">
        <SectionHeader title={p.applicants.title} subtitle={p.applicants.subtitle} />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.applicants.firstRound.title}</h3>
            <ol className="mt-6 space-y-4">
              {p.applicants.firstRound.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <NumberBadge n={i + 1} />
                  <p className="pt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{p.applicants.secondRound.title}</h3>
            <ol className="mt-6 space-y-4">
              {p.applicants.secondRound.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <NumberBadge n={i + 1} />
                  <p className="pt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
    </>
  );
}
