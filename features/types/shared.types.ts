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

export interface IColored {
  bgColor?: string;
  color?: string;
}

export interface ITag {
  name: string;
  slug: string;
}

export interface ITableValue {
  value: string;
  isBad?: boolean;
}
export interface ITableRow {
  title: string;
  values: (ITableValue | string)[];
}

export interface IAchievement {
  img: string;
  alt: string;
  min: number;
  max: number;
  progress: number;
  title: string;
}
export interface TDateValues { time: string | null; date: Date | null };


export type TSubDuration = 'year' | 'month'