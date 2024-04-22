import { LegacyRef } from "react";
import styles from "./styles.module.css";

type GameScreenProps = {
  currentText: string;
  input: string;
  timer: number;
  isCompleted: boolean;
  mistakes: number;
  scoreEarned: number;
  capsLock: boolean;
  inputRef: LegacyRef<HTMLInputElement> | undefined;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function GameScreen({
  currentText,
  input,
  timer,
  isCompleted,
  mistakes,
  scoreEarned,
  capsLock,
  inputRef,
  handleChange
}: GameScreenProps) {
  const renderText = (): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    let inputIndex = 0;
    const textWords = currentText.split(/\s+/);

    textWords.forEach((word, wordIndex) => {
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const inputChar = input[inputIndex];
        const className =
          inputIndex < input.length
            ? inputChar === char
              ? styles.correctChar
              : styles.incorrectChar
            : styles.untypedChar;

        elements.push(
          <span key={`${wordIndex}-${i}`} className={className}>
            {char}
          </span>
        );

        inputIndex++;
      }

      if (wordIndex < textWords.length - 1) {
        elements.push(
          <span key={`space-${wordIndex}`} className={styles.spaceChar}>
            {" "}
          </span>
        );

        inputIndex++;
      }
    });

    return elements;
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-12 relative">
      <div className="max-w-2xl mx-auto">
        <dl className="grid overflow-hidden text-lg border-none text-center sm:grid-cols-1 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4 xl:divide-y-0">
          <div>
            ⌛ Timer <span>{timer}</span>
          </div>

          <div>
            ❌ Mistakes <span>{mistakes}</span>
          </div>

          <div>
            🅰 CapsLk <span>{capsLock ? "On" : "Off"}</span>
          </div>

          <div>
            🎯 Accuracy <span>{scoreEarned.toFixed(1) + "%"}</span>
          </div>
        </dl>

        <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className={`${styles.text} text-base leading-8 my-5 text-xl`}>
            {renderText()}
          </div>

          <input
            type="text"
            value={input}
            ref={inputRef}
            onChange={handleChange}
            className="sr-only"
            placeholder="Start typing..."
            readOnly={isCompleted}
          />
        </div>
      </div>
    </div>
  );
}
