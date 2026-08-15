"use client";

import { Suspense, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getShuffledQuestions, isDomain, Question } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import Results from "@/components/Results";
import { recordAttempts } from "@/lib/stats";

interface Answer { question: Question; selected: number[]; isCorrect: boolean; }

function isCorrect(q: Question, sel: number[]): boolean {
  const correct = Array.isArray(q.correct) ? [...q.correct].sort() : [q.correct];
  const s = [...sel].sort();
  return correct.length === s.length && correct.every((v, i) => v === s[i]);
}

export default function FreePage() {
  return (
    <Suspense fallback={null}>
      <FreeSession />
    </Suspense>
  );
}

function FreeSession() {
  const router = useRouter();
  const domainParam = useSearchParams().get("domain");
  const domain = isDomain(domainParam) ? domainParam : null;
  const [questions]   = useState<Question[]>(() => getShuffledQuestions(domain));
  const [index, setIndex]     = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers]   = useState<Answer[]>([]);
  const [done, setDone]         = useState(false);

  const q = questions[index];

  const handleSelect = useCallback((idx: number) => {
    if (revealed) return;
    if (q.type === "single") {
      setSelected([idx]);
    } else {
      setSelected((p) => p.includes(idx) ? p.filter((i) => i !== idx) : [...p, idx]);
    }
  }, [revealed, q]);

  const handleCheck = () => { if (selected.length > 0) setRevealed(true); };

  const handleNext = () => {
    const newAnswer = { question: q, selected, isCorrect: isCorrect(q, selected) };
    const ans = [...answers, newAnswer];
    setAnswers(ans);
    recordAttempts([newAnswer]);
    if (index + 1 >= questions.length) { setDone(true); return; }
    setIndex((i) => i + 1);
    setSelected([]);
    setRevealed(false);
  };

  const retry = () => { setAnswers([]); setIndex(0); setSelected([]); setRevealed(false); setDone(false); };

  if (done) {
    return (
      <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <PageHeader domain={domain} />
        <Results answers={answers} onRetry={retry} onHome={() => router.push("/")} mode="free" />
      </div>
    );
  }

  const correctCount = answers.filter((a) => a.isCorrect).length;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
      <PageHeader domain={domain} />

      {/* Progress */}
      <div style={{ background: "var(--border)", height: "2px" }}>
        <div
          style={{
            height: "100%",
            width: `${(index / questions.length) * 100}%`,
            background: "var(--blue)",
            transition: "width 0.3s",
          }}
        />
      </div>

      {/* Stats */}
      <div
        className="flex items-center justify-between px-6 py-2 text-sm"
        style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex gap-5">
          <span style={{ color: "var(--green)" }}>{correctCount} correct</span>
          <span style={{ color: "var(--red)" }}>{answers.length - correctCount} incorrect</span>
        </div>
        <span style={{ color: "var(--text-dim)" }}>
          Question {index + 1} of {questions.length}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 flex flex-col gap-4">
        <QuestionCard
          question={q}
          selected={selected}
          revealed={revealed}
          onSelect={handleSelect}
          questionNumber={index + 1}
          total={questions.length}
        />

        <div className="flex justify-end">
          {!revealed ? (
            <button
              onClick={handleCheck}
              disabled={selected.length === 0}
              className="px-6 py-2.5 rounded text-sm font-semibold text-white"
              style={{
                background: "var(--blue)",
                opacity: selected.length === 0 ? 0.35 : 1,
                cursor: selected.length === 0 ? "not-allowed" : "pointer",
              }}
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded text-sm font-semibold text-white"
              style={{ background: "var(--blue)" }}
            >
              {index + 1 >= questions.length ? "View Results" : "Next Question"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function PageHeader({ domain }: { domain?: string | null }) {
  const router = useRouter();
  return (
    <header
      className="h-14 flex items-center gap-3 px-6"
      style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}
    >
      <button
        onClick={() => router.push("/")}
        className="text-sm"
        style={{ color: "var(--text-muted)" }}
      >
        Back
      </button>
      <span style={{ color: "var(--border-light)" }}>|</span>
      <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>Practice Session</span>
      {domain && (
        <span className="text-xs truncate" style={{ color: "var(--text-muted)" }}>
          — {domain}
        </span>
      )}
      <span
        className="ml-auto text-xs px-2 py-0.5 rounded shrink-0"
        style={{ background: "var(--blue-soft)", color: "var(--blue)" }}
      >
        {domain ? "Domain Drill" : "Free Mode"}
      </span>
    </header>
  );
}
