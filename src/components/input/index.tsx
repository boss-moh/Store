import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  className?: string;
};
type LabelProps = ComponentProps<"label"> & {
  InputProps?: InputProps;
};
const Input = ({ InputProps = {}, className, ...rest }: LabelProps) => {
  const { className: classNameInput, ...restInput } = InputProps;
  return (
    <label
      className={`flex items-center gap-2 rounded-full input input-bordered ${className}`}
      {...rest}
    >
      <input
        {...restInput}
        type="text"
        className={`grow ${classNameInput}`}
        placeholder="Search For Product"
      />
      <kbd className="kbd kbd-sm">⌘</kbd>
      <kbd className="kbd kbd-sm">K</kbd>
    </label>
  );
};
export { Input };
export default Input;
