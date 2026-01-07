
export interface TrainingPlanParams {
  position: string;
  goal: string;
}

export interface StatsParams {
  points: number;
  rebounds: number;
  assists: number;
}

export type AIResultType = 'plan' | 'stats' | null;

export interface AIResponseState {
  type: AIResultType;
  content: string;
  loading: boolean;
}
