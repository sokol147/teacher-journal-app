export interface Subject {
  id: number;
  name: string;
  teacher: string;
  cabinet?: number;
  description?: string;
  date?: string[];
  students?: any[];
}
