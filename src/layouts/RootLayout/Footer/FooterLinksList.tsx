import { ChildrenType } from "@/constants";
import { Link } from "react-router";

type FooterLinksListProps = {
  title: ChildrenType;
  links: any[];
};
export const FooterLinksList = ({ title, links }: FooterLinksListProps) => {
  return (
    <article className="">
      <h3 className="text-xl capitalize text-primary">{title}</h3>
      <ul className="gap-2 capitalize menu menu-vertical ">
        {links.map((item) => (
          <Link className="text-lg text-gray-60 " to={item} key={item}>
            {item}
          </Link>
        ))}
      </ul>
    </article>
  );
};

export default FooterLinksList;
