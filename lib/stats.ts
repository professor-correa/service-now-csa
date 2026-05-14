import { Question, Domain, questions } from "@/data/questions";

const STORAGE_KEY = "csa-stats-v1";

interface Attempt {
  qid: number;
  domain: Domain;
  correct: boolean;
  ts: number;
}

interface Store {
  attempts: Attempt[];
}

function read(): Store {
  if (typeof window === "undefined") return { attempts: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { attempts: [] };
    const parsed = JSON.parse(raw) as Store;
    return parsed?.attempts ? parsed : { attempts: [] };
  } catch {
    return { attempts: [] };
  }
}

function write(store: Store) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export interface RecordedAnswer {
  question: Question;
  isCorrect: boolean;
}

export function recordAttempts(answers: RecordedAnswer[]) {
  const store = read();
  const now = Date.now();
  for (const a of answers) {
    store.attempts.push({
      qid: a.question.id,
      domain: a.question.domain,
      correct: a.isCorrect,
      ts: now,
    });
  }
  write(store);
}

export interface QuestionStat {
  question: Question;
  attempts: number;
  wrong: number;
  accuracy: number;
}

export interface DomainStat {
  domain: Domain;
  attempts: number;
  correct: number;
  accuracy: number;
}

export interface Stats {
  totalAttempts: number;
  totalCorrect: number;
  overallAccuracy: number;
  perDomain: DomainStat[];
  perQuestion: QuestionStat[];
  topWrong: QuestionStat[];
}

export function getStats(): Stats {
  const { attempts } = read();
  const byQid = new Map<number, { attempts: number; wrong: number }>();
  const byDomain = new Map<Domain, { attempts: number; correct: number }>();

  for (const a of attempts) {
    const q = byQid.get(a.qid) ?? { attempts: 0, wrong: 0 };
    q.attempts += 1;
    if (!a.correct) q.wrong += 1;
    byQid.set(a.qid, q);

    const d = byDomain.get(a.domain) ?? { attempts: 0, correct: 0 };
    d.attempts += 1;
    if (a.correct) d.correct += 1;
    byDomain.set(a.domain, d);
  }

  const qLookup = new Map(questions.map((q) => [q.id, q]));

  const perQuestion: QuestionStat[] = [];
  for (const [qid, agg] of byQid) {
    const q = qLookup.get(qid);
    if (!q) continue;
    perQuestion.push({
      question: q,
      attempts: agg.attempts,
      wrong: agg.wrong,
      accuracy: agg.attempts > 0 ? (agg.attempts - agg.wrong) / agg.attempts : 0,
    });
  }

  const perDomain: DomainStat[] = [];
  for (const [domain, agg] of byDomain) {
    perDomain.push({
      domain,
      attempts: agg.attempts,
      correct: agg.correct,
      accuracy: agg.attempts > 0 ? agg.correct / agg.attempts : 0,
    });
  }
  perDomain.sort((a, b) => a.accuracy - b.accuracy);

  const topWrong = [...perQuestion]
    .filter((q) => q.wrong > 0)
    .sort((a, b) => {
      if (b.wrong !== a.wrong) return b.wrong - a.wrong;
      return a.accuracy - b.accuracy;
    })
    .slice(0, 20);

  const totalAttempts = attempts.length;
  const totalCorrect = attempts.filter((a) => a.correct).length;

  return {
    totalAttempts,
    totalCorrect,
    overallAccuracy: totalAttempts > 0 ? totalCorrect / totalAttempts : 0,
    perDomain,
    perQuestion,
    topWrong,
  };
}

export function clearStats() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
