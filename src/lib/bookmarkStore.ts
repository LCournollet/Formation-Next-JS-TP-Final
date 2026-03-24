import { create } from "zustand";
import type { Job } from "@/types/job";

type BookmarkStore = {
  bookmarks: Job[];
  toggle: (job: Job) => void;
  isBookmarked: (id: string) => boolean;
};

export const useBookmarkStore = create<BookmarkStore>((set, get) => ({
  bookmarks: [],
  toggle: (job) =>
    set((state) => ({
      bookmarks: state.bookmarks.some((b) => b.id === job.id)
        ? state.bookmarks.filter((b) => b.id !== job.id)
        : [...state.bookmarks, job],
    })),
  isBookmarked: (id) => get().bookmarks.some((b) => b.id === id),
}));
