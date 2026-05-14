"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStats, clearStats, Stats } from "@/lib/stats";

const domainColors: Record<string, string> = {
  "Platform Overview and Navigation":           "var(--domain-1)",
  "Instance Configuration":                     "var(--domain-2)",
  "Configuring Applications for Collaboration": "var(--domain-3)",
  "Self Service & Automation":                  "var(--domain-4)",
  "Database Management and Platform Security":  "var(--domain-5)",
  "Data Migration and Integration":             "var(--domain-6)",
};

export default function StatsPage() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    setStats(getStats());
  }, []);

  const handleClear = () => {
    if (!confirm("Reset all saved stats? This cannot be undone.")) return;
    clearStats();
    setStats(getStats());
  };

  if (!stats) return null;

  const overallPct = Math.round(stats.overallAccuracy * 100);
  const empty = stats.totalAttempts === 0;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
      <header
        className="h-14 flex items-center gap-3 px-6"
        style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}
      >
        <button onClick={() => router.push("/")} className="text-sm" style={{ color: "var(--text-muted)" }}>
          Back
        </button>
        <span style={{ color: "var(--border-light)" }}>|</span>
        <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>Your Stats</span>
        {!empty && (
          <button
            onClick={handleClear}
            className="ml-auto text-xs"
            style={{ color: "var(--red)" }}
          >
            Reset
          </button>
        )}
      </header>

      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        {empty ? (
          <div className="text-center py-20" style={{ color: "var(--text-muted)" }}>
            <p className="text-sm">No data yet.</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>
              Finish a Practice or Exam Simulation to start tracking your weak spots.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {/* Overall */}
            <div
              className="rounded-lg p-5 flex items-center gap-5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex flex-col items-center justify-center shrink-0"
                style={{
                  border: `3px solid ${overallPct >= 70 ? "var(--green)" : "var(--red)"}`,
                  background: overallPct >= 70 ? "var(--green-soft)" : "var(--red-soft)",
                }}
              >
                <span className="text-lg font-extrabold" style={{ color: overallPct >= 70 ? "var(--green)" : "var(--red)" }}>
                  {overallPct}%
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  Overall accuracy
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  {stats.totalCorrect} correct of {stats.totalAttempts} answers across all sessions
                </p>
              </div>
            </div>

            {/* Domains */}
            <div
              className="rounded-lg p-5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                Domains — weakest first
              </p>
              <div className="space-y-3">
                {stats.perDomain.map((d) => {
                  const pct = Math.round(d.accuracy * 100);
                  const color = domainColors[d.domain] ?? "var(--text-muted)";
                  return (
                    <div key={d.domain}>
                      <div className="flex justify-between text-sm mb-1">
                        <span style={{ color: "var(--text)" }}>{d.domain}</span>
                        <span style={{ color: pct >= 70 ? "var(--green)" : "var(--red)" }}>
                          {d.correct}/{d.attempts} — {pct}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "var(--border)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${pct}%`, background: color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Top wrong */}
            <div
              className="rounded-lg p-5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                Most-missed questions
              </p>
              {stats.topWrong.length === 0 ? (
                <p className="text-sm text-center py-4" style={{ color: "var(--green)" }}>
                  No wrong answers yet.
                </p>
              ) : (
                <div className="space-y-2">
                  {stats.topWrong.map((q) => {
                    const pct = Math.round(q.accuracy * 100);
                    return (
                      <div
                        key={q.question.id}
                        className="p-3 rounded text-sm"
                        style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="flex-1" style={{ color: "var(--text)" }}>
                            {q.question.question.length > 130
                              ? q.question.question.slice(0, 130) + "…"
                              : q.question.question}
                          </p>
                          <span
                            className="text-xs font-semibold whitespace-nowrap"
                            style={{ color: "var(--red)" }}
                          >
                            {q.wrong}/{q.attempts} wrong
                          </span>
                        </div>
                        <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>
                          {q.question.domain} · {pct}% accuracy
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
