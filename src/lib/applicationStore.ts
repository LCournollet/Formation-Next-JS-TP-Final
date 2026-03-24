import { create } from "zustand";

type Application = {
  jobUid: string;
  jobTitle: string;
  message: string;
  submittedAt: string;
};

type ApplicationStore = {
  applications: Application[];
  addApplication: (application: Application) => void;
};

export const useApplicationStore = create<ApplicationStore>((set) => ({
  applications: [],
  addApplication: (application) =>
    set((state) => ({ applications: [...state.applications, application] })),
}));
