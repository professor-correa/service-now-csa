import { Question } from "../types";
import { platformNavigationQuestions } from "./platform-navigation";
import { instanceConfigurationQuestions } from "./instance-configuration";
import { configuringApplicationsQuestions } from "./configuring-applications";
import { selfServiceAutomationQuestions } from "./self-service-automation";
import { databaseSecurityQuestions } from "./database-security";
import { dataMigrationQuestions } from "./data-migration";

/**
 * Questions derived directly from the official ServiceNow Administration
 * Fundamentals (SNAF) slide decks — Australia release, Modules 0 to 9.
 * Every question carries a `source` pointing at the module/section it came from.
 */
export const snafQuestions: Question[] = [
  ...platformNavigationQuestions,
  ...instanceConfigurationQuestions,
  ...configuringApplicationsQuestions,
  ...selfServiceAutomationQuestions,
  ...databaseSecurityQuestions,
  ...dataMigrationQuestions,
];
