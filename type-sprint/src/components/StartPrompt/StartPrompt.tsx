import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function StartPrompt() {
  const words = [
    "💻 Ready to sprint? Start typing!",
    "Practice typing 💬",
    "Improve your speed ⚡"
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < words[wordIndex].length) {
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [wordIndex, charIndex, isDeleting]);

  return (
    <div
      className={`${styles.container} bg-gradient-to-tr from-[#C9ADA7] via-[#9A8C98] to-[#4A4E69]`}
    >
      <h1 className="text-4xl font-bold" id="typewriter">
        {words[wordIndex].substring(0, charIndex)}
      </h1>
    </div>
  );
}
