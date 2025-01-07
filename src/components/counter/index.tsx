import { MinuesIcon, PlusIcon } from "@/assets/icons";
import { tw } from "@/libs";

type CounterProps = {
  count: number;
  handleClick: (value: number) => void;
  classNameButton?: string;
};

export const Counter = ({
  count,
  handleClick,
  classNameButton,
}: CounterProps) => {
  const hasPrev = count > 1;
  return (
    <div className=" join">
      <button
        onClick={() => handleClick(-1)}
        disabled={!hasPrev}
        className={tw(
          `join-item btn   text-3xl  font-normal ${
            !hasPrev && "btn-disabled"
          } `,
          classNameButton
        )}
      >
        <MinuesIcon />
      </button>
      <button className={`join-item btn ${classNameButton} `}>{count}</button>
      <button
        onClick={() => handleClick(1)}
        className={`join-item btn  text-3xl font-normal ${classNameButton}`}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Counter;
