import { divProps } from "@/constants";

export const AlertMessage = ({
  className = "",
  children,
  ...rest
}: divProps) => {
  return (
    <div
      role="alert"
      className={`p-2 alert alert-warning ${className}`}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 stroke-current shrink-0"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {children}
    </div>
  );
};

export default AlertMessage;
