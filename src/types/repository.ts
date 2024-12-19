export interface Repository {
  id: string;
  name: string;
  isPublic: boolean;
  language: string;
  size: number;
  lastUpdatedDateInDay: number;
  description?: string;
}
