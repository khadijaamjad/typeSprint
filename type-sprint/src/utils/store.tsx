import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
  scoreEarned: number;
  setScoreEarned: (val: number) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      scoreEarned: 0,
      setScoreEarned: (val: number) => set(() => ({ scoreEarned: val }))
    }),
    {
      name: "game-store"
    }
  )
);
