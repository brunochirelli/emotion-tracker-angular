export type Event = {
  id: number;
  event: string;
  date: string;
  emotions: Emotion[];
  reaction: string;
  rule: string;
};

export type Emotion = {
  id: number;
  name: string;
  percentage: number;
};

export type EventForm = Partial<Event>;
