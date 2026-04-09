"use client";

import { useEffect, useState, useRef } from "react";

interface Props {
  totalSeconds: number;
  onExpire: () => void;
  paused?: boolean;
}

export default function Timer({ totalSeconds, onExpire, paused = false }: Props) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (paused || remaining <= 0) return;
    const id = setInterval(() => {
      setRemaining((s) => {
        if (s <= 1) { clearInterval(id); onExpireRef.current(); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [paused, remaining]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const pct = (remaining / totalSeconds) * 100;

  const color =
    pct > 50 ? "var(--teal)" : pct > 20 ? "var(--amber)" : "var(--red)";

  const r = 14;
  const circumference = 2 * Math.PI * r;

  return (
    <div
      className="flex items-center gap-2.5 px-3 py-1.5 rounded"
      style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r={r} fill="none" stroke="var(--border)" strokeWidth="2.5" />
        <circle
          cx="16" cy="16" r={r}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - pct / 100)}
          strokeLinecap="round"
          transform="rotate(-90 16 16)"
          style={{ transition: "stroke-dashoffset 1s linear, stroke 0.5s" }}
        />
      </svg>
      <div>
        <p className="text-base font-mono font-bold leading-none" style={{ color }}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>
        <p className="text-xs" style={{ color: "var(--text-dim)" }}>remaining</p>
      </div>
    </div>
  );
}
