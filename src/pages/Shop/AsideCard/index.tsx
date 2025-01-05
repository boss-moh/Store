import { ArrowIcon } from "@/assets/icons";
import { divProps } from "@/constants";
import { useToggle } from "@/hooks";

type AsideCardProps = divProps & {
  title: string;
};
export const AsideCard = ({
  title = "",
  children,
  className,
  ...rest
}: AsideCardProps) => {
  const { isOpen, toggle } = useToggle(true);
  return (
    <div className={`${className} space-y-3 `} {...rest}>
      <h3
        onClick={toggle}
        className="flex items-center justify-between text-xl font-medium cursor-pointer"
      >
        <span>{title}</span>
        <span>
          <ArrowIcon className={isOpen ? "-rotate-90" : "rotate-90"} />
        </span>
      </h3>
      {isOpen && children}
    </div>
  );
};

export default AsideCard;
