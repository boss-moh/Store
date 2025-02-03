import { productType } from "@/constants";

export interface ShopContextType {
  // Add your shop-related state and methods here
  // For example:
  products: ShopItem[];
  addToCart: (shopItem: ShopItem) => void;
  removeFromCart: (productId: number) => void;
  changeQuantity: (productId: number, quantity: number) => void;
  checkItem: (productId: number) => boolean;
}

export interface ShopItem {
  product: productType;
  quantity: number;
}

export type ShopAction =
  | { type: "ADD_TO_CART"; payload: ShopItem }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | {
      type: "CHANGE_QUANTITY";
      payload: {
        id: number;
        quantity: number;
      };
    };
