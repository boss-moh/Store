export const API_BASE_URL = import.meta.env.VITE_REACT_API_URL as string;

export const API_END_POINT = {
  // CATEGORIES: "categories",
  CATEGORIES: "products/category-list",
  GET_PRODUCTS: (skip: number) => `products?limit=9&skip=${skip ?? 0}`,
} as const;
