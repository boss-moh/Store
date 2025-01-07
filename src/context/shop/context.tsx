import { childrenProps } from "@/constants";
import { createContext, useContext, useMemo } from "react";
import useShopReducer from "./useShopReducer";
import { ShopContextType } from "./types";

// Define the shape of our context data

// Create initial context value
const initialShopContext: ShopContextType = {
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
};

// Create the context
const ShopContext = createContext<ShopContextType>(initialShopContext);

// Create the provider component

export const ShopContextProvider = ({ children }: childrenProps) => {
  // Add your state management logic here
  // For example using useState:
  // const [products, setProducts] = useState<any[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  const value = useShopReducer(initialShopContext);

  return (
    <ShopContext.Provider value={value}>
      {useMemo(() => children, [])}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  return useContext(ShopContext);
};
