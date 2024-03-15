import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
  totalScore: number;
  scoreEarned: number;
  setTotalScore: (val: number) => void;
  setScoreEarned: (val: number) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      totalScore: 100,
      scoreEarned: 0,
      setTotalScore: (val: number) => set(() => ({ totalScore: val })),
      setScoreEarned: (val: number) => set(() => ({ scoreEarned: val }))
    }),
    {
      name: "game-store"
    }
  )
);
