import styles from "./styles.module.css";
import { ScoreDetail, GradientButton } from "../index";
import { getRemarks } from "../../utils/helpers";

type FinalScoreProps = {
  WPM: number;
  charactersTyped: number;
  mistakes: number;
  scoreEarned: number;
  restartGame: () => void;
};

export default function FinalScore({
  WPM,
  charactersTyped,
  mistakes,
  scoreEarned,
  restartGame
}: FinalScoreProps) {
  return (
    <div className={styles.container}>
      <div className="my-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-4">
              <h2 className="md:text-3xl font-bold tracking-tight text-white sm:text-xl">
                {getRemarks(scoreEarned)}
              </h2>

              <h3 className="text-lg leading-8 text-white">
                Here is your final score breakdown
              </h3>
            </div>

            <dl className="mt-16 grid grid divide-x divide-y divide-gray-700 overflow-hidden rounded-2xl border text-center text-gray-600 border-gray-700 sm:grid-cols-1 lg:grid-cols-5  lg:divide-y-0 xl:grid-cols-5">
              <ScoreDetail
                description="characters typed"
                value={charactersTyped}
              />

              <ScoreDetail
                description="characters correct"
                value={charactersTyped - mistakes}
              />

              <ScoreDetail description="mistakes" value={mistakes} />

              <ScoreDetail
                description="score earned"
                value={`${scoreEarned.toFixed(1)} %`}
              />

              <ScoreDetail description="words per minute" value={WPM} />
            </dl>
          </div>
        </div>
      </div>

      <GradientButton func={restartGame} text="Play Again" />
    </div>
  );
}
