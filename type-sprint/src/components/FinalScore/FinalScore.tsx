import styles from "./styles.module.css";
import { ScoreDetail, GradientButton } from "../index";
import { getRemarks } from "../../utils/helpers";

type FinalScoreProps = {
  WPM: number;
  totalCharacters: number;
  mistakes: number;
  scoreEarned: number;
  restartGame: () => void;
};

export default function FinalScore({
  WPM,
  totalCharacters,
  mistakes,
  scoreEarned,
  restartGame
}: FinalScoreProps) {
  return (
    <div className={styles.container}>
      <div className="py-20 sm:py-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {getRemarks(scoreEarned)}
              </h2>

              <h3 className="text-lg leading-8 text-white">
                Here is your final score breakdown
              </h3>
            </div>

            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <ScoreDetail description="words per minute" value={WPM} />

              <ScoreDetail
                description="characters correct"
                value={totalCharacters - mistakes}
              />

              <ScoreDetail
                description="score earned"
                value={`${scoreEarned.toFixed(1)} %`}
              />

              <ScoreDetail description="mistakes" value={mistakes} />
            </dl>
          </div>
        </div>
      </div>

      <GradientButton func={restartGame} text="Play Again" />
    </div>
  );
}
