export const API_BASE_URL = import.meta.env.VITE_REACT_API_URL as string;

export const API_END_POINT = {
  CATEGORIES: "products/category-list",
  GET_PRODUCTS: (skip = 0) => `products?limit=9&skip=${skip}`,
} as const;
