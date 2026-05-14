"use client";

import Link from "next/link";
import { questions, EXAM_CONFIG } from "@/data/questions";

const domains = [
  { name: "Platform Overview and Navigation",           pct: 7,  color: "var(--domain-1)" },
  { name: "Instance Configuration",                     pct: 11, color: "var(--domain-2)" },
  { name: "Configuring Applications for Collaboration", pct: 20, color: "var(--domain-3)" },
  { name: "Self Service & Automation",                  pct: 17, color: "var(--domain-4)" },
  { name: "Database Management and Platform Security",  pct: 27, color: "var(--domain-5)" },
  { name: "Data Migration and Integration",             pct: 18, color: "var(--domain-6)" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>

      {/* Top bar */}
      <header style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "var(--blue)" }}
            >
              SN
            </div>
            <span className="font-semibold text-sm" style={{ color: "var(--text)" }}>
              ServiceNow CSA Prep
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/stats"
              className="text-xs font-medium"
              style={{ color: "var(--blue)" }}
            >
              Your Stats
            </Link>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {questions.length} practice questions
            </span>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-12 flex flex-col gap-10">

        {/* Page title */}
        <div>
          <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
            Certified System Administrator
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Exam preparation platform. Study at your pace or simulate the real certification exam.
          </p>
        </div>

        {/* Exam info strip */}
        <div
          className="grid grid-cols-3 divide-x rounded-lg"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          {[
            { label: "Questions",    value: String(EXAM_CONFIG.totalQuestions) },
            { label: "Time Limit",   value: `${EXAM_CONFIG.timeLimitMinutes} min` },
            { label: "Passing Score",value: `${EXAM_CONFIG.passingPercentage}%` },
          ].map((s) => (
            <div key={s.label} className="px-6 py-4" style={{ borderRight: "1px solid var(--border)" }}>
              <p className="text-xl font-bold" style={{ color: "var(--text)" }}>{s.value}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mode cards */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Free Mode */}
          <Link
            href="/free"
            className="rounded-lg p-6 flex flex-col gap-4 group"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--blue)" }}>
                  Free Mode
                </span>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "var(--blue-soft)", color: "var(--blue)" }}>
                  No time limit
                </span>
              </div>
              <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                Practice Sessions
              </h2>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                Answer questions one at a time. After each submission, the correct answer and a detailed
                explanation are revealed immediately.
              </p>
            </div>
            <ul className="text-sm space-y-1" style={{ color: "var(--text-muted)" }}>
              {[
                "Questions served in random order",
                "Immediate answer feedback",
                "Full explanation for every question",
                "Running score tracker",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span style={{ color: "var(--teal)" }}>—</span> {f}
                </li>
              ))}
            </ul>
            <div
              className="mt-auto text-center text-sm font-semibold py-2.5 rounded"
              style={{ background: "var(--blue)", color: "white" }}
            >
              Start Practice
            </div>
          </Link>

          {/* Exam Simulation */}
          <Link
            href="/hard"
            className="rounded-lg p-6 flex flex-col gap-4 group"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--amber)" }}>
                  Exam Simulation
                </span>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "var(--amber-soft)", color: "var(--amber)" }}>
                  Timed — 90 min
                </span>
              </div>
              <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                Full Exam Simulation
              </h2>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                Replicates the actual CSA exam: 60 questions, domain-weighted, with a 90-minute countdown.
                Results and domain analysis are shown at the end.
              </p>
            </div>
            <ul className="text-sm space-y-1" style={{ color: "var(--text-muted)" }}>
              {[
                `${EXAM_CONFIG.totalQuestions} questions, domain-weighted`,
                "90-minute countdown timer",
                "Question navigator panel",
                "Detailed results and domain breakdown",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span style={{ color: "var(--amber)" }}>—</span> {f}
                </li>
              ))}
            </ul>
            <div
              className="mt-auto text-center text-sm font-semibold py-2.5 rounded"
              style={{ background: "var(--amber)", color: "white" }}
            >
              Start Simulation
            </div>
          </Link>
        </div>

        {/* Domain breakdown */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
            Exam Domains
          </h2>
          <div
            className="rounded-lg divide-y"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            {domains.map((d, i) => {
              const count = questions.filter((q) => q.domain === d.name).length;
              return (
                <div
                  key={d.name}
                  className="flex items-center gap-4 px-5 py-3"
                  style={{ borderBottom: i < domains.length - 1 ? "1px solid var(--border)" : "none" }}
                >
                  <div className="w-1 h-8 rounded-full shrink-0" style={{ background: d.color }} />
                  <span className="flex-1 text-sm" style={{ color: "var(--text)" }}>{d.name}</span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{count} questions</span>
                  <div className="w-24 flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: "var(--border)" }}>
                      <div className="h-full rounded-full" style={{ width: `${d.pct}%`, background: d.color }} />
                    </div>
                    <span className="text-xs w-8 text-right font-medium" style={{ color: d.color }}>
                      {d.pct}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}
