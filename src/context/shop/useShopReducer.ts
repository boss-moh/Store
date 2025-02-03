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
          (item) => item.product.id !== action.payload
        ),
      };

    case "CHANGE_QUANTITY":
      return {
        ...state,
        products: state.products.map((item) => {
          const quantity = item.quantity + action.payload.quantity;
          return item.product.id == action.payload.id
            ? { ...item, quantity }
            : item;
        }),
      };


    default:
      return state;
  }
};
export const useShopReducer = (initialShopContext: ShopContextType) => {
  const [state, dispatch] = useReducer(shopReducer, initialShopContext);

  const addToCart = (product: ShopItem) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };
  const changeQuantity = (productId: number, quantity: number) => {
    dispatch({ type: "CHANGE_QUANTITY", payload: { id: productId, quantity } });
  };
  const checkItem = (productId: number) => {
   return !!state.products.find((item)=>item.product.id === productId) 
  };

  return { ...state, addToCart, removeFromCart, changeQuantity ,checkItem};
};

export default useShopReducer;
