import { lazy } from "react";

const StartPrompt = lazy(() => import("./StartPrompt/StartPrompt"));
const DarkModeButton = lazy(() => import("./DarkModeButton/DarkModeButton"));
import GameScreen from "./GameScreen/GameScreen";
import FinalScore from "./FinalScore/FinalScore";
import ScoreDetail from "./ScoreDetail/ScoreDetail";
import GradientButton from "./GradientButton/GradientButton";

export {
  StartPrompt,
  FinalScore,
  ScoreDetail,
  GradientButton,
  GameScreen,
  DarkModeButton
};
