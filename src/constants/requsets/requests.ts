import { API_END_POINT, categoryType, productType } from "@/constants";
import { useQuery, axios } from "@/libs";
import { useState } from "react";

const getPage = (count: number, elements: number) =>
  Math.ceil(count / elements);

export const useProducts = () => {
  const [page, setPage] = useState(0);

  type returenData = {
    limit: number;
    products: productType[];
    skip: number;
    total: number;
  };
  const {
    data: { products, limit, skip, total },
    ...rest
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () =>
      axios.get(API_END_POINT.GET_PRODUCTS(page * 9)) as Promise<returenData>,
    initialData: {
      limit: 0,
      products: [],
      skip: 0,
      total: 0,
    },
  });

  const pages = getPage(total, limit);
  const currentPage = getPage(skip, limit) || 0;
  const hasNext = currentPage !== pages - 1;
  const hasPrev = currentPage !== 0;

  const handlePagination = (test: string) => {
    if (test === "+") {
      if (hasNext) setPage(page + 1);
    } else {
      if (hasPrev) setPage(page - 1);
    }
  };
  return {
    products,
    hasNext,
    hasPrev,
    currentPage: currentPage + 1,
    onPagtion: handlePagination,
    ...rest,
  };
};
export const useCategories = () => {
  const { data: categories, ...rest } = useQuery({
    queryKey: ["CATEGORIES"],
    queryFn: () =>
      axios.get(API_END_POINT.CATEGORIES) as Promise<categoryType[]>,
    staleTime: Infinity,
    initialData: [],
  });

  return {
    categories,
    ...rest,
  };
};
