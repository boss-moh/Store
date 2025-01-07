import { ShopAction, ShopContextType, ShopItem } from "./types";
import { useReducer } from "react";

const shopReducer = (
  state: ShopContextType,
  action: ShopAction
): ShopContextType => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.products.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        return state;
      }
      return {
        ...state,

        products: [...state.products, action.payload],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,

        products: state.products.filter(
          (item) => item.product.id !== Number(action.payload)
        ),
      };

    default:
      return state;
  }
};
const useShopReducer = (initialShopContext: ShopContextType) => {
  const [state, dispatch] = useReducer(shopReducer, initialShopContext);

  const addToCart = (product: ShopItem) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return { ...state, addToCart, removeFromCart };
};

export default useShopReducer;
