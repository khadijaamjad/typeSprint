type ScoreDetailProps = {
  description: string;
  value: number | string;
};

export default function ScoreDetail({ description, value }: ScoreDetailProps) {
  return (
    <div className="flex flex-col bg-white/5 p-8">
      <dt className="text-sm font-semibold leading-6 text-gray-300">
        {description}
      </dt>
      <dd className="order-first md:text-3xl sm:text-xl font-semibold tracking-tight text-white">
        {value}
      </dd>
    </div>
  );
}
