import { lazy } from "react";

const StartPrompt = lazy(() => import("./StartPrompt/StartPrompt"));
const GameScreen = lazy(() => import("./GameScreen/GameScreen"));
const DarkModeButton = lazy(() => import("./DarkModeButton/DarkModeButton"));
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