import { ICreatedAt } from "./shared.types";

export type TLanguage = "javascript" | "c#" | "rust";
export type TExperience = "junior" | "middle" | "senior";
export type TDirection = "backend" | "frontend" | "qa" | "devops" | "data";
export type TRating = "basic" | "advanced" | "basic+";

export interface IVideo {
  url: string;
  delay: string;
}

export interface ILesson extends ICreatedAt {
  id: number;
  title: string;
  description: string;
  courseId: number;
  video: IVideo;
}

export interface ICourse extends ICreatedAt {
  id: number;
  name: string;
  description: string;
  query: string;
  lang: TLanguage;
  direction: TDirection;
  rating: TRating;
  experience: TExperience;

  graphic: string[];
  labels: string[];
  lessons: ILesson[];
}
