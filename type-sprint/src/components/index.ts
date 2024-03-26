import { lazy } from "react";

const StartPrompt = lazy(() => import("./StartPrompt/StartPrompt"));
const HowToPlay = lazy(() => import("./HowToPlay/HowToPlay"));
const DarkModeButton = lazy(() => import("./DarkModeButton/DarkModeButton"));
import GameScreen from "./GameScreen/GameScreen";
import FinalScore from "./FinalScore/FinalScore";
import ScoreDetail from "./ScoreDetail/ScoreDetail";
import GradientButton from "./GradientButton/GradientButton";
import Step from "./Step/Step";

export {
  StartPrompt,
  FinalScore,
  ScoreDetail,
  GradientButton,
  GameScreen,
  DarkModeButton,
  Step,
  HowToPlay
};
