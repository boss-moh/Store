export const calcReview = (rate: number) => {
  const rateFormFive = Math.round(rate);
  const minuseRate = 5 - Math.round(rate);
  return {
    rateFormFive,
    minuseRate,
  };
};

export default calcReview;
