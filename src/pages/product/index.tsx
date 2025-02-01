import { API_END_POINT, productType, URL_LINKS } from "@/constants";
import { Link, useLocation, useParams } from "react-router";
import ProductViewer from "./ProductViewer";
import { RatingStars } from "@/components";
import { calcReview } from "@/utils";
import Review from "./Review";
import ActionsButtons from "./Actions";
import { axios, useQuery } from "@/libs";

const ProductPage = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const productViaNavgivater = state?.product as productType;
  const hasProductPassViaNavigiater = !!productViaNavgivater;

  const { data: product, isLoading } = useQuery<productType>({
    queryKey: [id],
    queryFn: async () => axios.get(API_END_POINT.GET_PRODUCT(String(id))),
    initialData: productViaNavgivater,
    enabled: !hasProductPassViaNavigiater,
  });

  if (isLoading) return <p>Loading ...</p>;
  const { title, rating, price, description, reviews = [] } = product;

  const reviewsCount = reviews.length;
  const { minuseRate, rateFormFive } = calcReview(rating);
  return (
    <div className="px-6 py-4 ">
      <div className=" breadcrumbs">
        <ul>
          <li>
            <Link to={URL_LINKS.HOME}>Home</Link>
          </li>
          <li>
            <Link to={URL_LINKS.SHOP}>Shop</Link>
          </li>
          <li>
            <Link to={URL_LINKS.PRODUCT(String(id))}>{title}</Link>
          </li>
        </ul>
      </div>
      <section className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <ProductViewer product={product} />
          <article className="space-y-6">
            <header className="space-y-2">
              <h2 className="text-3xl font-bold ">{title}</h2>
              <div
                className="flex items-center gap-4"
                aria-label="rating of the product "
              >
                <RatingStars minuseRate={minuseRate} rate={rateFormFive} />
                <span aria-label="rate">{rating} / 5</span>
              </div>
              <div>
                <span className="text-2xl " aria-label="price">
                  {price}$
                </span>
              </div>
            </header>
            <p>{description}</p>
            <ActionsButtons product={product} />
          </article>
        </div>
        <article className="space-y-2">
          <h3 className="text-2xl">Rating & Reviews</h3>
          <h4 className="text-xl">
            All Reviews
            <span className="text-base text-gray-word ">({reviewsCount})</span>
          </h4>
          <article className="flex flex-wrap gap-4">
            {reviews.map((review, index) => (
              <Review key={index} review={review} />
            ))}
          </article>
        </article>
      </section>
    </div>
  );
};

export default ProductPage;
