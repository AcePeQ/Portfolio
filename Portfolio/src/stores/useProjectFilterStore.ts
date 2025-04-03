import { create } from "zustand";

interface IProjectFilter {
  activeFilter: number | null;
  setActiveFilter: (newActiveFilter: number | null) => void;
}

export const useProjectFilter = create<IProjectFilter>()((set) => ({
  activeFilter: null,
  setActiveFilter: (newActiveFilter) => set({ activeFilter: newActiveFilter }),
}));
