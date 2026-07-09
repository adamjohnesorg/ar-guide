import type { GuideImage } from "./GuideImage";

export type GuideSubsection = {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  images: GuideImage[];
  examples: string[];
};