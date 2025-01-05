import { ArrowIcon } from "@/assets/icons";
import { Link, LinkProps } from "react-router";
type AsideLinkProps = LinkProps;
export const AsideLink = ({
  className = "",
  children,
  ...rest
}: AsideLinkProps) => {
  return (
    <Link
      className={`flex items-center justify-between border-none btn-sm btn hover:bg-gray-10 btn-ghost ${className}`}
      {...rest}
    >
      <span>{children}</span>
      <span>
        <ArrowIcon />
      </span>
    </Link>
  );
};

export default AsideLink;
