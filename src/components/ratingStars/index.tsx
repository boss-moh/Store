type RatingStars = {
  rate: number;
  minuseRate: number;
};

export const RatingStars = ({ rate, minuseRate }: RatingStars) => {
  const renderRates = (starsCount: number, className: string) =>
    Array(starsCount)
      .fill(0)
      .map((_, index) => (
        <span
          key={index}
          className={`w-8 h-8  mask mask-star-2 ${className}`}
        />
      ));
  return (
    <div className="rating rating-lg">
      {renderRates(rate, "bg-orange-400")}
      {renderRates(minuseRate, "bg-slate-300")}
    </div>
  );
};

export default RatingStars;
