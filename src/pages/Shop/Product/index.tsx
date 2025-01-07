import { divProps, productType, URL_LINKS } from "@/constants";
import { truncateStr } from "@/utils";
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
          src={product.thumbnail}
          alt={`${product.title} Image`}
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{product.title}</h2>
        <p className="">
          {truncateStr(product.description, product.description.length)}
        </p>
        <div className="justify-end card-actions">
          <Link
            to={URL_LINKS.PRODUCT(String(product.id))}
            className="w-full btn btn-primary"
            state={{ product }}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
