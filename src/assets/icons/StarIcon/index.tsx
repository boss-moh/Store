import { ComponentProps } from "react";

const StarIcon = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M28 0c.95 15.053 12.947 27.05 28 28-15.053.95-27.05 12.947-28 28-.95-15.053-12.947-27.05-28-28 15.053-.95 27.05-12.947 28-28Z"
    />
  </svg>
);
export { StarIcon };
export default StarIcon;
