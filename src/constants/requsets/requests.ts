import { API_END_POINT, categoryType, productType } from "@/constants";
import { useQuery, axios } from "@/libs";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

type returenData = {
  products: productType[];
  total: number;
};
export const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") ?? "";
  const skip = searchParams.get("skip") ?? "";

  const { data, ...rest } = useQuery({
    queryKey: ["products", category, skip],
    queryFn: () =>
      axios.get(
        category
          ? API_END_POINT.GET_PRODUCTS_BY_CATEGORY(category)
          : API_END_POINT.GET_PRODUCTS(searchParams.toString())
      ) as Promise<returenData>,
    initialData: {
      products: [],
      total: 0,
    },
  });

  const { total, products = [] } = data ?? {};

  useEffect(() => {
    if (total) {
      searchParams.set("total", total.toString());
      setSearchParams(searchParams);
    }
  }, [total]);

  return {
    products,
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
