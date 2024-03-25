import { LegacyRef } from "react";
import styles from "./styles.module.css";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

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
    <div>
      <div className={styles.details}>
        <div>
          ⌛ Timer <span>{timer} </span>
        </div>

        <div>
          ❌ Mistakes <span>{mistakes}</span>
        </div>

        <div>
          🎯 Accuracy <span>{scoreEarned.toFixed(1) + "%"}</span>
        </div>

        <div>
          🅰 CapsLk <span>{capsLock ? "On" : "Off"}</span>
        </div>
      </div>

      <div className={styles.text}>{renderText()}</div>

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
  );
}
