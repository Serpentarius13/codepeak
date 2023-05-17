import { IColored, ICreatedAt } from "./shared.types";

export type TLanguage = "javascript" | "csharp" | "rust";
export type TExperience = "junior" | "middle" | "middle+";
export type TDirection = "backend" | "frontend" | "practic" | "devops"
export type TRating = "basic" | "popular" | "top";

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

export interface IColoredCourse extends ICourse, IColored {}