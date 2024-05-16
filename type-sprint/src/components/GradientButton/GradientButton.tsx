import { MouseEventHandler } from "react";

type GradientButtonProps = {
  text: string;
  func: MouseEventHandler<HTMLButtonElement>;
};

export default function GradientButton({ text, func }: GradientButtonProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-blue-gray via-rich-lavender to-pastel-red p-0.5 shadow-lg items-center justify-center">
        <button
          className="flex-1 font-bold text-xl bg-alabaster px-6 py-3 rounded-xl text-gray"
          onClick={func}
        >
          {text}
        </button>
      </div>
    </div>
  );
}
