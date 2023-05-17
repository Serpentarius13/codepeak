export type TLevel = "easy" | "medium" | "hard";
export interface IRatingStars {
  level: TLevel;
  stars: number;
}

export interface ITaskStat {
  stat: number | string;
  icon: string;
}

export interface IBannerTag {
  text: string;
  subtext: string;
}

export interface ITeamSlide {
  img: string;
  alt: string;
  name: string;
  position: string;
  color: string;
}

export interface ICreatedAt {
  createdAt: string;
  updatedAt: string;
}
