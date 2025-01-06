import { createContext, ReactNode, FC } from "react";
import { ShopContext } from "./index";

// Define the shape of our context data
interface ShopContextType {
  // Add your shop-related state and methods here
  // For example:
  products: any[];
  loading: boolean;
  error: string | null;
}

// Create initial context value
const initialShopContext: ShopContextType = {
  products: [],
  loading: false,
  error: null,
};

// Create the context
const ShopContext = createContext<ShopContextType>(initialShopContext);

// Create the provider component
interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContextProvider: FC<ShopContextProviderProps> = ({
  children,
}) => {
  // Add your state management logic here
  // For example using useState:
  // const [products, setProducts] = useState<any[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const value = {
    products: [],
    loading: false,
    error: null,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
