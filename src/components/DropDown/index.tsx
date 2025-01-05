import { ChildrenType } from "@/constants";
import { ComponentProps } from "react";

type DropDownProps = { button: ChildrenType } & ComponentProps<"details">;

export const DropDown = ({
  children,
  className = "",
  button,
  ...rest
}: DropDownProps) => {
  return (
    <details className={`${className} dropdown  `} {...rest}>
      <summary className="m-1 text-base btn btn-xs ">{button}</summary>
      <ul className="p-2 border shadow menu dropdown-content bg-base-100 rounded-box w-36 border-gray ">
        {children}
      </ul>
    </details>
  );
};

export default DropDown;
