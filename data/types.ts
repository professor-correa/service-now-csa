export type QuestionType = "single" | "multiple";

export type Domain =
  | "Platform Overview and Navigation"
  | "Instance Configuration"
  | "Configuring Applications for Collaboration"
  | "Self Service & Automation"
  | "Database Management and Platform Security"
  | "Data Migration and Integration";

export interface Question {
  id: number;
  domain: Domain;
  type: QuestionType;
  question: string;
  options: string[];
  correct: number | number[]; // index(es) of correct answer(s)
  explanation: string;
  explanation_pt: string;
  /** SNAF slide deck this question was derived from (module / section). */
  source?: string;
}
