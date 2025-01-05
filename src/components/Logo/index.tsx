import { URL_LINKS } from "@/constants";
import { Link } from "react-router";

export const Logo = () => {
  return (
    <Link
      aria-label="logo link to home page "
      to={URL_LINKS.HOME}
      className="text-xl font-bold w-fit "
    >
      SHOP.CO
    </Link>
  );
};

export default Logo;
