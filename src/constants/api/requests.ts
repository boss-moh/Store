import { API_END_POINT, categoryType, productType } from "@/constants";
import { useQuery, axios } from "@/libs";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

type returenData = {
  products: productType[];
  total: number;
};
export const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    limit:"9"
  });
  const category = searchParams.get("category") ?? "";
  const skip = searchParams.get("skip") ?? "0";
  const search = searchParams.get("search") ?? "";

  const requestKey = ["products"];
  let requestURL = API_END_POINT.GET_PRODUCTS(searchParams.toString());

  let titleForUI = "All Products";

  if (search) {
    requestKey.push(search);
    requestURL = API_END_POINT.GET_PRODUCTS_BY_SEARCH(search);
    titleForUI = `Search for ${search}`;
  } else if (category) {
    requestKey.push(category);
    requestURL = API_END_POINT.GET_PRODUCTS_BY_CATEGORY(category);
    titleForUI = `${category} Products`;
  }
  if (skip) {
    requestKey.push(skip);
  }

  const { data, ...rest } = useQuery({
    queryKey: requestKey,
    queryFn: () => axios.get(requestURL) as Promise<returenData>,
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
    titleForUI,
  };
};

export const useCategories = () => {
  const { data: categories, ...rest } = useQuery({
    queryKey: ["CATEGORIES"],
    queryFn: () =>
      axios.get(API_END_POINT.CATEGORIES) as Promise<categoryType[]>,
    staleTime: Infinity,
  });

  return {
    categories: categories ?? [],
    ...rest,
  };
};
