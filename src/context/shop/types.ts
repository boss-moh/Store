import { productType } from "@/constants";

export interface ShopContextType {
  // Add your shop-related state and methods here
  // For example:
  products: ShopItem[];
  addToCart: (shopItem: ShopItem) => void;
  removeFromCart: (productId: string) => void;
}

export interface ShopItem {
  product: productType;
  quantity: number;
}

export type ShopAction =
  | { type: "ADD_TO_CART"; payload: ShopItem }
  | { type: "REMOVE_FROM_CART"; payload: string };
