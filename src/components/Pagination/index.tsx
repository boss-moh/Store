import { tw } from "@/libs";

export type PaginationProps = {
  hasNext: boolean;
  hasPrev: boolean;
  currentPage: number;
  getPrev: () => void;
  getNext: () => void;
};
export const Pagination = ({
  hasNext,
  hasPrev,
  currentPage,
  getNext,
  getPrev,
}: PaginationProps) => {
  return (
    <div className="!flex justify-center w-full join">
      <button
        onClick={getPrev}
        disabled={!hasPrev}
        className={tw(`join-item btn ${!hasPrev && "btn-disabled"}`)}
      >
        «
      </button>
      <button className="join-item btn">{currentPage}</button>
      <button
        onClick={getNext}
        disabled={!hasNext}
        className={tw(`join-item btn ${!hasNext && "btn-disabled"}`)}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
