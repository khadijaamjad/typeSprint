type ScoreDetailProps = {
  description: string;
  value: number;
};

export default function ScoreDetail({ description, value }: ScoreDetailProps) {
  return (
    <div className="flex flex-col bg-white/5 p-8">
      <dt className="text-sm font-semibold leading-6 text-gray-300">
        {description}
      </dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
        {value}
      </dd>
    </div>
  );
}
