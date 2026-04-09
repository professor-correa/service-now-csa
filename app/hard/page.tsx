"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { selectExamQuestions, Question, EXAM_CONFIG } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import Timer from "@/components/Timer";
import Results from "@/components/Results";

interface Answer { question: Question; selected: number[]; isCorrect: boolean; }

function isCorrect(q: Question, sel: number[]): boolean {
  const correct = Array.isArray(q.correct) ? [...q.correct].sort() : [q.correct];
  const s = [...sel].sort();
  return correct.length === s.length && correct.every((v, i) => v === s[i]);
}

type Phase = "intro" | "exam" | "results";

export default function HardPage() {
  const router = useRouter();
  const [phase, setPhase]           = useState<Phase>("intro");
  const [questions, setQuestions]   = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selMap, setSelMap]         = useState<Record<number, number[]>>({});
  const [answers, setAnswers]       = useState<Answer[]>([]);
  const [timeTaken, setTimeTaken]   = useState(0);
  const startRef                    = useRef<number>(0);
  const totalSeconds                = EXAM_CONFIG.timeLimitMinutes * 60;

  const startExam = () => {
    setQuestions(selectExamQuestions());
    setCurrentIdx(0);
    setSelMap({});
    setAnswers([]);
    startRef.current = Date.now();
    setPhase("exam");
  };

  const handleSelect = useCallback((qIdx: number, optIdx: number, type: "single" | "multiple") => {
    setSelMap((prev) => {
      const cur = prev[qIdx] ?? [];
      if (type === "single") return { ...prev, [qIdx]: [optIdx] };
      const exists = cur.includes(optIdx);
      return { ...prev, [qIdx]: exists ? cur.filter((i) => i !== optIdx) : [...cur, optIdx] };
    });
  }, []);

  const finish = useCallback((expired = false) => {
    const elapsed = Math.floor((Date.now() - startRef.current) / 1000);
    setTimeTaken(expired ? totalSeconds : elapsed);
    setAnswers(
      questions.map((q, i) => {
        const sel = selMap[i] ?? [];
        return { question: q, selected: sel, isCorrect: isCorrect(q, sel) };
      })
    );
    setPhase("results");
  }, [questions, selMap, totalSeconds]);

  if (phase === "intro") {
    return (
      <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
        <PageHeader />
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-md">
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
              Full Exam Simulation
            </h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              Replicates the real CSA certification exam environment. Read the rules below before starting.
            </p>

            <div
              className="rounded-lg divide-y mb-6"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              {[
                ["Questions",     `${EXAM_CONFIG.totalQuestions} questions, domain-weighted`],
                ["Time Limit",    `${EXAM_CONFIG.timeLimitMinutes} minutes — cannot be paused`],
                ["Passing Score", `${EXAM_CONFIG.passingPercentage}% (${Math.ceil(EXAM_CONFIG.totalQuestions * EXAM_CONFIG.passingPercentage / 100)} correct)`],
                ["Feedback",      "No answer feedback until the exam is submitted"],
                ["Navigation",    "You may revisit any question before submitting"],
              ].map(([label, desc]) => (
                <div key={label} className="flex gap-3 px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                  <span className="text-sm font-medium w-28 shrink-0" style={{ color: "var(--text)" }}>{label}</span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{desc}</span>
                </div>
              ))}
            </div>

            <button
              onClick={startExam}
              className="w-full py-3 rounded text-sm font-semibold text-white"
              style={{ background: "var(--amber)" }}
            >
              Begin Exam
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
        <PageHeader />
        <Results
          answers={answers}
          timeTaken={timeTaken}
          totalTime={totalSeconds}
          onRetry={() => setPhase("intro")}
          onHome={() => router.push("/")}
          mode="hard"
        />
      </div>
    );
  }

  // Exam
  const q = questions[currentIdx];
  const curSel = selMap[currentIdx] ?? [];
  const answeredCount = Object.values(selMap).filter((v) => v.length > 0).length;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Exam header */}
      <header
        className="h-14 flex items-center gap-4 px-4"
        style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>
          CSA Simulation
        </span>
        <span className="text-xs" style={{ color: "var(--text-dim)" }}>
          {answeredCount}/{EXAM_CONFIG.totalQuestions} answered
        </span>
        <div className="ml-auto">
          <Timer totalSeconds={totalSeconds} onExpire={() => finish(true)} />
        </div>
      </header>

      {/* Progress */}
      <div style={{ background: "var(--border)", height: "2px" }}>
        <div
          style={{
            height: "100%",
            width: `${(answeredCount / EXAM_CONFIG.totalQuestions) * 100}%`,
            background: "var(--amber)",
            transition: "width 0.3s",
          }}
        />
      </div>

      <div className="flex flex-1 overflow-hidden">

        {/* Question area */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <QuestionCard
              question={q}
              selected={curSel}
              revealed={false}
              onSelect={(idx) => handleSelect(currentIdx, idx, q.type)}
              questionNumber={currentIdx + 1}
              total={EXAM_CONFIG.totalQuestions}
            />

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentIdx((i) => i - 1)}
                disabled={currentIdx === 0}
                className="px-4 py-2 rounded text-sm"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  color: currentIdx === 0 ? "var(--text-dim)" : "var(--text)",
                  opacity: currentIdx === 0 ? 0.4 : 1,
                }}
              >
                Previous
              </button>

              {currentIdx < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIdx((i) => i + 1)}
                  className="px-4 py-2 rounded text-sm font-semibold text-white"
                  style={{ background: "var(--blue)" }}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => finish(false)}
                  className="px-4 py-2 rounded text-sm font-semibold text-white"
                  style={{ background: "var(--amber)" }}
                >
                  Submit Exam
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar navigator */}
        <aside
          className="hidden md:flex flex-col w-48 border-l p-4 overflow-y-auto"
          style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-dim)" }}>
            Navigator
          </p>
          <div className="grid grid-cols-5 gap-1 mb-4">
            {questions.map((_, i) => {
              const answered = (selMap[i] ?? []).length > 0;
              const isCur    = i === currentIdx;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className="w-8 h-8 rounded text-xs font-semibold"
                  style={{
                    background: isCur
                      ? "var(--blue)"
                      : answered
                      ? "rgba(34,197,94,0.15)"
                      : "var(--border)",
                    color: isCur
                      ? "white"
                      : answered
                      ? "var(--green)"
                      : "var(--text-dim)",
                    border: isCur ? "1px solid var(--blue)" : "1px solid transparent",
                  }}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <div className="text-xs space-y-1.5 mb-6" style={{ color: "var(--text-dim)" }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ background: "var(--blue)" }} /> Current
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ background: "rgba(34,197,94,0.25)" }} /> Answered
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded" style={{ background: "var(--border)" }} /> Unanswered
            </div>
          </div>

          <button
            onClick={() => finish(false)}
            className="mt-auto w-full py-2 rounded text-xs font-semibold text-white"
            style={{ background: "var(--amber)" }}
          >
            Submit Exam
          </button>
        </aside>
      </div>
    </div>
  );
}

function PageHeader() {
  const router = useRouter();
  return (
    <header
      className="h-14 flex items-center gap-3 px-6"
      style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border)" }}
    >
      <button onClick={() => router.push("/")} className="text-sm" style={{ color: "var(--text-muted)" }}>
        Back
      </button>
      <span style={{ color: "var(--border-light)" }}>|</span>
      <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>Exam Simulation</span>
    </header>
  );
}
