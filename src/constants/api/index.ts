export const API_BASE_URL = import.meta.env.VITE_REACT_API_URL as string;

export const API_END_POINT = {
  CATEGORIES: "products/category-list",
  // GET_PRODUCTS: (skip = 0) => `products?limit=9&skip=${skip}`,
  GET_PRODUCTS: (params: string) => `products?${params}`,
  GET_PRODUCTS_BY_CATEGORY: (category: string) =>
    `products/category/${category}`,
  GET_PRODUCTS_BY_SEARCH: (search: string) => `products/search?q=${search}`,
} as const;
