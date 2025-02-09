import { tw } from "@/libs";
import { ComponentProps } from "react";

type CardProps = ComponentProps<"div">;

export const Card = ({ className = "", ...rest }: CardProps) => {
  return (
    <div
      className={tw(
        "rounded-lg  border-gray-10 border p-4 shadow-xl ",
        className
      )}
      {...rest}
    />
  );
};

export default Card;
