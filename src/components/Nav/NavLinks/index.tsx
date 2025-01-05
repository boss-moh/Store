import { Link } from "react-router";
import { NAV_LINKS } from "@/constants";

const NavLinks = ({ className = "" }) => {
  return (
    <ul
      className={`menu menu-vertical lg:menu-horizontal rounded-box gap-2   ${className}`}
    >
      {NAV_LINKS.map((item) => (
        <li key={item.text}>
          <Link className="uppercase " id={item.text} to={item.link}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
