type StepProps = {
  header: number | string;
  description: string;
  stepCount?: string;
};

export default function Step({ description, header, stepCount }: StepProps) {
  return (
    <div className="group relative bg-white/5 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
      <div className="relative space-y-8 py-12 p-8">
        {stepCount && (
          <div className="flex items-center justify-center w-10 h-10 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
            <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              {stepCount}
            </span>
          </div>
        )}

        <div className="space-y-2">
          <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
            {header}
          </h5>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
