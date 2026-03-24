export type Job = {
  id: string;
  uid: string | null;
  title: string;
  date: string;
  technologies: string[];
  description: string;
  available: boolean;
};
