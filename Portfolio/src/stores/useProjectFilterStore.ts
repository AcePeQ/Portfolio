import { create } from "zustand";

interface IProjectFilter {
  activeFilter: string | null;
  setActiveFilter: (newActiveFilter: string | null) => void;
}

export const useProjectFilter = create<IProjectFilter>()((set) => ({
  activeFilter: null,
  setActiveFilter: (newActiveFilter) => set({ activeFilter: newActiveFilter }),
}));
