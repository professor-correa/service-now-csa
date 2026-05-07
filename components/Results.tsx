"use client";

import { Question, Domain } from "@/data/questions";

interface Answer {
  question: Question;
  selected: number[];
  isCorrect: boolean;
}

interface Props {
  answers: Answer[];
  timeTaken?: number;
  totalTime?: number;
  onRetry: () => void;
  onHome: () => void;
  mode: "free" | "hard";
}

const domainColors: Record<string, string> = {
  "Platform Overview and Navigation":           "var(--domain-1)",
  "Instance Configuration":                     "var(--domain-2)",
  "Configuring Applications for Collaboration": "var(--domain-3)",
  "Self Service & Automation":                  "var(--domain-4)",
  "Database Management and Platform Security":  "var(--domain-5)",
  "Data Migration and Integration":             "var(--domain-6)",
};

function fmt(s: number) {
  return `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, "0")}s`;
}

export default function Results({ answers, timeTaken, totalTime, onRetry, onHome, mode }: Props) {
  const total   = answers.length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const pct     = total > 0 ? Math.round((correct / total) * 100) : 0;
  const passed  = pct >= 70;

  const domains = Array.from(new Set(answers.map((a) => a.question.domain))) as Domain[];
  const domainStats = domains.map((domain) => {
    const da = answers.filter((a) => a.question.domain === domain);
    const dc = da.filter((a) => a.isCorrect).length;
    return { domain, correct: dc, total: da.length, pct: Math.round((dc / da.length) * 100) };
  });

  return (
    <div className="max-w-2xl mx-auto w-full px-4 py-10 fade-up">

      {/* Score header */}
      <div
        className="rounded-lg p-6 mb-5 flex items-center gap-6"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <div
          className="w-20 h-20 rounded-full shrink-0 flex flex-col items-center justify-center"
          style={{
            border: `3px solid ${passed ? "var(--green)" : "var(--red)"}`,
            background: passed ? "var(--green-soft)" : "var(--red-soft)",
          }}
        >
          <span className="text-2xl font-extrabold" style={{ color: passed ? "var(--green)" : "var(--red)" }}>
            {pct}%
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>{correct}/{total}</span>
        </div>
        <div>
          <p
            className="text-xl font-bold"
            style={{ color: passed ? "var(--green)" : "var(--red)" }}
          >
            {passed ? "Pass" : "Fail"}
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {passed
              ? "You met the 70% passing threshold."
              : "A minimum of 70% is required to pass."}
          </p>
          {timeTaken !== undefined && mode === "hard" && (
            <p className="text-xs mt-2" style={{ color: "var(--text-dim)" }}>
              Time used: {fmt(timeTaken)}{totalTime ? ` of ${fmt(totalTime)}` : ""}
            </p>
          )}
        </div>
      </div>

      {/* Domain performance */}
      <div
        className="rounded-lg p-5 mb-5"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
          Performance by Domain
        </p>
        <div className="space-y-3">
          {domainStats.map((d) => {
            const color = domainColors[d.domain] ?? "var(--text-muted)";
            return (
              <div key={d.domain}>
                <div className="flex justify-between text-sm mb-1">
                  <span style={{ color: "var(--text)" }}>{d.domain}</span>
                  <span style={{ color: d.pct >= 70 ? "var(--green)" : "var(--red)" }}>
                    {d.correct}/{d.total} — {d.pct}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: "var(--border)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${d.pct}%`, background: color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Incorrect answers */}
      {mode === "hard" && (
        <div
          className="rounded-lg p-5 mb-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
            Incorrect Answers ({answers.filter((a) => !a.isCorrect).length})
          </p>
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {answers.filter((a) => !a.isCorrect).length === 0 ? (
              <p className="text-sm text-center py-4" style={{ color: "var(--green)" }}>
                All answers correct.
              </p>
            ) : (
              answers.filter((a) => !a.isCorrect).map((a, i) => {
                const correctArr = Array.isArray(a.question.correct) ? a.question.correct : [a.question.correct];
                const labels = correctArr.map((c) => ["A","B","C","D","E"][c]).join(", ");
                return (
                  <div
                    key={i}
                    className="p-3 rounded text-sm"
                    style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                  >
                    <p style={{ color: "var(--text)" }}>
                      {a.question.question.length > 100
                        ? a.question.question.slice(0, 100) + "…"
                        : a.question.question}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                      Correct: <span style={{ color: "var(--green)" }}>{labels}</span>
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onHome}
          className="flex-1 py-2.5 rounded text-sm font-medium"
          style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text)" }}
        >
          Home
        </button>
        <button
          onClick={onRetry}
          className="flex-1 py-2.5 rounded text-sm font-semibold text-white"
          style={{ background: "var(--blue)" }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
