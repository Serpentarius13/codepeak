export type TExperience = "basic" | "advanced" | 'basic+';

export interface IStatistics {
  views: number;
  completed: number;
  tryes: number;
}

export interface ITask {
  name: string;
  description: string;
  course: string;
  id: number;
  experience: TExperience;
  statistic: IStatistics;
  rating: number;
}
