import { ShopItem, useShopContext } from "@/context";
import ProductItem from "./ProductItem";

const calcPrice = (price: number, discountPercentage: number) => {
  const discount = Number(((price * discountPercentage) / 100).toFixed(2));
  return price - discount;
};

const getAllInfomations = (shopeItems: ShopItem[] = []) => {
  const before = shopeItems
    .map((item) => item.product.price * item.quantity)
    .reduce((a, b) => a + b, 0);
  const after = shopeItems
    .map(
      (item) =>
        calcPrice(item.product.price, item.product.discountPercentage) *
        item.quantity
    )
    .reduce((a, b) => a + b, 0);

  return {
    before: before.toFixed(2),
    after: after.toFixed(2),
    discount: Math.abs(after - before).toFixed(2),
  };
};

export const ShopCard = () => {
  const { products } = useShopContext();
  const { after, before, discount } = getAllInfomations(products);
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold">Your Card</h2>
      <div className="space-y-4">
        {products.length ? (
          <section className="space-y-8">
            <article className="space-y-2">
              {products.map(({ product, quantity }) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  quantity={quantity}
                />
              ))}
            </article>
            <article>
              <header>
                <h3 className="text-lg font-bold">Order Summary</h3>
              </header>
              <article className="space-y-2">
                <p className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-red-500">${before}</span>
                </p>
                <p className="flex justify-between">
                  <span> Discount</span>
                  <span className="text-green-500">${discount}</span>
                </p>
                <div className=" divider" />
                <p className="flex justify-between">
                  <span> Total</span>
                  <span>${after}</span>
                </p>
              </article>
            </article>
          </section>
        ) : (
          <p className="p-2">Your Card Is Empty</p>
        )}
      </div>
    </div>
  );
};

export default ShopCard;
