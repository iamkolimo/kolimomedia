// Shared between the project wizard (client) and the contact server action
// so the option lists can't drift apart.

export const PROJECT_TYPES = [
  "Production",
  "Digital Marketing",
  "Creative Direction",
  "Web & App Solutions",
  "Other",
] as const;

export const BUDGET_RANGES = [
  "Under ₦1m",
  "₦1m–₦5m",
  "₦5m–₦20m",
  "Over ₦20m",
  "Not sure yet",
] as const;

export const TIMELINES = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "Flexible",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type BudgetRange = (typeof BUDGET_RANGES)[number];
export type Timeline = (typeof TIMELINES)[number];
