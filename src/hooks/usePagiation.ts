import { useSearchParams } from "react-router";

const getPage = (count: number, elements: number) =>
  Math.ceil(count / elements);

export const usePagiation = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    skip: "0",
    limit: "9",
  });
  const limit = Number(searchParams.get("limit")) || 0;
  const total = Number(searchParams.get("total")) || 0;
  const skip = Number(searchParams.get("skip")) || 0;

  const pages = getPage(total, limit);
  const currentPage = getPage(skip, limit) || 0;
  const hasNext = currentPage !== pages - 1;
  const hasPrev = currentPage !== 0;

  const handlePagination = (test: string) => {
    if (test === "+" && hasNext) {
      searchParams.set("skip", (skip + limit).toString());
    } else if (test === "-" && hasPrev) {
      searchParams.set("skip", (skip - limit).toString());
    }
    setSearchParams(searchParams);
  };

  return {
    handlePagination,
    hasNext,
    hasPrev,
    currentPage: currentPage + 1,
  };
};

export default usePagiation;
