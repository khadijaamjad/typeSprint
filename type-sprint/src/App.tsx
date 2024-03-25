import React, { useEffect, useRef, useState } from "react";

import styles from "./App.module.css";
import { useAppStore } from "./utils/store";
import { calculateWPM } from "./utils/helpers";
import { RandomText, Values } from "./utils/constants";
import { StartPrompt, FinalScore, GameScreen } from "./components";

export default function App() {
  const { scoreEarned, setScoreEarned } = useAppStore();

  const [mistakes, setMistakes] = useState<number>(0);
  const [enteredText, setEnteredText] = useState<string>("");
  const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(Values.Timer);

  const inputRef = useRef<HTMLInputElement>(null);
  const [currentText, setCurrentText] = useState<string>(
    RandomText[Math.floor(Math.random() * RandomText.length)]
  );
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  useEffect(() => {
    setCurrentText(RandomText[Math.floor(Math.random() * RandomText.length)]);

    const focusInput = () => {
      setIsFocused(true);
      inputRef.current?.focus();
    };

    const handleClick = () => focusInput();

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.getModifierState("CapsLock")) {
        setIsCapsLockOn(true);
      } else {
        setIsCapsLockOn(false);
      }
      focusInput();
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isFocused && !isCompleted && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
        calculatePercentage(mistakes);
      }, 1000);
    } else if (timer <= 0) {
      setIsCompleted(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isFocused, isCompleted, timer]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    if (isCompleted || timer <= 0) {
      return;
    }

    let userTypedText = event.target.value;
    let currentMistakes = mistakes;

    if (userTypedText.length >= currentText.length) {
      userTypedText = userTypedText.slice(0, currentText.length);
      setIsCompleted(true);
      setEndTime(Date.now());
      calculatePercentage(currentMistakes);
    }

    if (!isCompleted && userTypedText.length > enteredText.length) {
      const lastTypedChar = userTypedText.at(-1);
      const correctChar = currentText[userTypedText.length - 1];

      if (lastTypedChar !== correctChar) {
        currentMistakes += 1;
        setMistakes(currentMistakes);
      }
    }

    setEnteredText(userTypedText);
  };

  const calculatePercentage = (mistakes: number) => {
    const textLength = currentText.length;
    const isEligible = enteredText.length > 0;

    const percentage = isEligible
      ? ((textLength - mistakes) / textLength) * 100
      : 0;

    setScoreEarned(percentage);
  };

  const restartGame = () => {
    setEnteredText("");
    setMistakes(0);
    setIsCompleted(false);
    setScoreEarned(0);
    inputRef.current?.focus();
    setTimer(Values.Timer);
    setStartTime(null);
    setEndTime(null);
    setCurrentText(RandomText[Math.floor(Math.random() * RandomText.length)]);
  };

  return (
    <div className={styles.wrapper}>
      {!isFocused && <StartPrompt />}

      <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-800">
        {isCompleted ? (
          <FinalScore
            WPM={calculateWPM(startTime, endTime, currentText)}
            totalCharacters={currentText.length}
            mistakes={mistakes}
            scoreEarned={scoreEarned}
            restartGame={restartGame}
          />
        ) : (
          <GameScreen
            currentText={currentText}
            input={enteredText}
            timer={timer}
            isCompleted={isCompleted}
            mistakes={mistakes}
            scoreEarned={scoreEarned}
            capsLock={isCapsLockOn}
            inputRef={inputRef}
            handleChange={handleChange}
          />
        )}
      </div>
    </div>
  );
}
