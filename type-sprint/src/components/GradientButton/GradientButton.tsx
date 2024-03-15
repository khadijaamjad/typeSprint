import { MouseEventHandler } from "react";

type GradientButtonProps = {
  text: string;
  func: MouseEventHandler<HTMLButtonElement>;
};

export default function GradientButton({ text, func }: GradientButtonProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-[#4A4E69] via-[#FF44EC] to-[#FF675E] p-0.5 shadow-lg items-center justify-center">
        <button
          className="flex-1 font-bold text-xl bg-[#F2E9E4] px-6 py-3 rounded-xl"
          onClick={func}
        >
          {text}
        </button>
      </div>
    </div>
  );
}
