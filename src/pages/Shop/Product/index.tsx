import { divProps, productType, URL_LINKS } from "@/constants";
import { Link } from "react-router";

type ProductProps = divProps & {
  product: productType;
};
export const Product = ({ product, className = "", ...rest }: ProductProps) => {
  return (
    <div className={`shadow-xl card bg-base-100 ${className} `} {...rest}>
      <figure>
        <img
          className="h-80"
          src={product.images[0]}
          alt={`${product.title} Image`}
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{product.title}</h2>
        <p className="">
          {product.description.length > 150
            ? `${product.description.slice(0, 150)} ...`
            : product.description}
        </p>
        <div className="justify-end card-actions">
          <Link
            to={URL_LINKS.PRODUCT(String(product.id))}
            className="w-full btn btn-primary"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
