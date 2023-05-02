

export type TLevel = "easy" | "medium" | "hard";
export interface IRatingStars {
  level: TLevel;
  stars: number;
}

export interface ITaskStat {
  stat: number | string;
  icon: string;
}