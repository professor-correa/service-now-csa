"use client";

import { Question } from "@/data/questions";

interface Props {
  question: Question;
  selected: number[];
  revealed: boolean;
  onSelect: (index: number) => void;
  questionNumber: number;
  total: number;
}

const domainColors: Record<string, string> = {
  "Data Administration":        "var(--domain-1)",
  "User Interface & Navigation":"var(--domain-2)",
  "Service Automation":         "var(--domain-3)",
  "Scripting & Development":    "var(--domain-4)",
  "Users & Tasks":              "var(--domain-5)",
};

const letters = ["A", "B", "C", "D", "E", "F"];

export default function QuestionCard({
  question, selected, revealed, onSelect, questionNumber, total,
}: Props) {
  const domainColor = domainColors[question.domain] ?? "var(--text-muted)";
  const correctArr = Array.isArray(question.correct) ? question.correct : [question.correct];

  function getState(idx: number): "idle" | "selected" | "correct" | "wrong" | "missed" {
    if (!revealed) return selected.includes(idx) ? "selected" : "idle";
    if (correctArr.includes(idx) && selected.includes(idx)) return "correct";
    if (correctArr.includes(idx))                            return "missed";
    if (selected.includes(idx))                              return "wrong";
    return "idle";
  }

  const stateStyle: Record<string, React.CSSProperties> = {
    idle: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border)",
      color: "var(--text)",
      cursor: "pointer",
    },
    selected: {
      background: "rgba(59,130,246,0.08)",
      border: "1px solid var(--blue)",
      color: "var(--text)",
      cursor: "pointer",
    },
    correct: {
      background: "rgba(34,197,94,0.08)",
      border: "1px solid var(--green)",
      color: "var(--text)",
      cursor: "default",
    },
    wrong: {
      background: "rgba(239,68,68,0.08)",
      border: "1px solid var(--red)",
      color: "var(--text)",
      cursor: "default",
    },
    missed: {
      background: "rgba(34,197,94,0.04)",
      border: "1px dashed var(--green)",
      color: "var(--text-muted)",
      cursor: "default",
    },
  };

  const badgeStyle: Record<string, React.CSSProperties> = {
    idle:     { background: "var(--border)", color: "var(--text-muted)" },
    selected: { background: "var(--blue)", color: "white" },
    correct:  { background: "var(--green)", color: "white" },
    wrong:    { background: "var(--red)", color: "white" },
    missed:   { background: "rgba(34,197,94,0.2)", color: "var(--green)" },
  };

  const badgeLabel: Record<string, string> = {
    idle: "", selected: "", correct: "Correct", wrong: "Incorrect", missed: "Missed",
  };

  return (
    <div
      className="rounded-lg p-6 fade-up"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      {/* Meta row */}
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded"
          style={{ background: `${domainColor}18`, color: domainColor }}
        >
          {question.domain}
        </span>
        {question.type === "multiple" && (
          <span
            className="text-xs px-2.5 py-1 rounded"
            style={{ background: "var(--amber-soft)", color: "var(--amber)" }}
          >
            Select all that apply
          </span>
        )}
        <span className="ml-auto text-xs" style={{ color: "var(--text-dim)" }}>
          {questionNumber} / {total}
        </span>
      </div>

      {/* Question */}
      <p
        className="text-base font-medium leading-relaxed mb-5 whitespace-pre-wrap"
        style={{ color: "var(--text)" }}
      >
        {question.question}
      </p>

      {/* Options */}
      <div className="space-y-2">
        {question.options.map((opt, idx) => {
          const s = getState(idx);
          return (
            <button
              key={idx}
              onClick={() => !revealed && onSelect(idx)}
              className="w-full text-left rounded flex items-start gap-3 px-4 py-3 transition-colors"
              style={{ ...stateStyle[s] }}
            >
              <span
                className="w-6 h-6 shrink-0 rounded text-xs font-bold flex items-center justify-center mt-0.5"
                style={badgeStyle[s]}
              >
                {letters[idx]}
              </span>
              <span className="text-sm leading-relaxed flex-1">{opt}</span>
              {revealed && badgeLabel[s] && (
                <span
                  className="text-xs font-semibold shrink-0 self-center"
                  style={{ color: s === "correct" ? "var(--green)" : s === "wrong" ? "var(--red)" : "var(--green)" }}
                >
                  {badgeLabel[s]}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {revealed && (
        <div
          className="mt-5 p-4 rounded fade-up"
          style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
            Explanation
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
