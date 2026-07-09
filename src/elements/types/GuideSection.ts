import type { GuideSubsection } from "./GuideSubsection";

export type GuideSection = {
  id: string;
  path: string;
  title: string;
  description: string;
  subsections: GuideSubsection[];
};