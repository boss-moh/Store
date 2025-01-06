import { MinuesIcon, PlusIcon } from "@/assets/icons";
import { tw } from "@/libs";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(1);
  function handleClick(changeCount: number) {
    setCount((prev) => prev + changeCount);
  }
  const hasPrev = count > 1;
  return (
    <div className=" join">
      <button
        onClick={() => handleClick(-1)}
        disabled={!hasPrev}
        className={tw(
          `join-item btn  text-3xl  font-normal ${!hasPrev && "btn-disabled"}`
        )}
      >
        <MinuesIcon />
      </button>
      <button className="join-item btn">{count}</button>
      <button
        onClick={() => handleClick(1)}
        className={"join-item btn text-3xl font-normal"}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Counter;
