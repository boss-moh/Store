import { useShopContext } from "@/context";
import ProductItem from "./ProductItem";

export const ShopCard = () => {
  const { products } = useShopContext();
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold">Your Card</h2>
      <div className="space-y-4">
        {products.length ? (
          products.map(({ product, quantity }) => (
            <ProductItem product={product} quantity={quantity} />
          ))
        ) : (
          <p className="p-2">Your Card Is Empty</p>
        )}
      </div>
    </div>
  );
};

export default ShopCard;
