function ScoreCard({ score, verdict }) {
  const fillPercentage = `${(score / 10) * 100}%`;

  return (
    <div className="w-full rounded-lg border border-slate-700 p-5 flex flex-col sm:flex-row items-center gap-4">

      <div className="relative w-[100px] h-[100px] shrink-0 flex items-center justify-center">
        <div
          style={{ '--fill': fillPercentage }}
          className="absolute inset-0 rounded-full
            bg-[conic-gradient(theme(colors.emerald.600)_0%_var(--fill),theme(colors.slate.500)_var(--fill)_100%)]
            [mask-image:radial-gradient(circle,transparent_60%,black_61%)]
            [-webkit-mask-image:radial-gradient(circle,transparent_60%,black_61%)]"
        />
        <h1 className="text-2xl font-bold text-white z-10">
          {score}/10
        </h1>
      </div>

      <p className="text-slate-300 text-xl sm:text-left text-center">
        {verdict}
      </p>

    </div>
  );
}

export default ScoreCard;