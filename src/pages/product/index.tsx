import { URL_LINKS } from "@/constants";
import { Link } from "react-router";

const ProductPage = () => {
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
            <Link to={URL_LINKS.SHOP}>Type Shop</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
