import styles from "./styles.module.css";
import { GradientButton, Step } from "..";

type HowToPlayProps = {
  startGame: () => void;
};

export default function HowToPlay({ startGame }: HowToPlayProps) {
  return (
    <div className={styles.container}>
      <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-100"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            ></path>
          </svg>

          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
            How it works
          </h2>
        </div>

        <div className="mt-8 grid divide-x divide-y  divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-1 lg:grid-cols-3  lg:divide-y-0 xl:grid-cols-3">
          <Step
            description="Type the text within 60 seconds"
            header="60 seconds"
            stepCount="1"
          />

          <Step
            description="Keep track of your performance as you go"
            header="Track Progress"
            stepCount="2"
          />

          <Step
            description="Get a final breakdown of your score once the game ends"
            header="Get scored"
            stepCount="3"
          />
        </div>

        <div className="mt-8">
          <GradientButton func={startGame} text="Let's start" />
        </div>
      </div>
    </div>
  );
}
