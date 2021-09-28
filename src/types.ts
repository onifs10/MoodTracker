export type MoodOptionType = {
  emoji: string;
  description: string;
};
export type MoodOptionWithTimestamp = {
  mood: MoodOptionType;
  timestamp: number;
};

export type AnalyticDataType = {
  x: string | number;
  y: number;
};
