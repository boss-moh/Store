import { Card, RatingStars } from "@/components";
import { rateType } from "@/constants";
import { calcReview, formatDate } from "@/utils";

type ReviewProps = {
  review: rateType;
};
export const Review = ({ review }: ReviewProps) => {
  const { minuseRate, rateFormFive } = calcReview(review.rating);
  return (
    <Card className="flex-grow" key={review.reviewerName}>
      <RatingStars minuseRate={minuseRate} rate={rateFormFive} />
      <h5>{review.reviewerName}</h5>
      <p className=" text-gray-word">{review.comment}</p>
      <span>Posted on {formatDate(review.date)}</span>
    </Card>
  );
};

export default Review;
