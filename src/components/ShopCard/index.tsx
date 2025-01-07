import { ShopItem, useShopContext } from "@/context";
import { Card, Counter } from "@/components";
import { TrashIcon } from "@/assets/icons";

export const ShopCard = () => {
  const { products } = useShopContext();
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold">Your Card</h2>
      <div className="space-y-4">
        {products.map(({ product, quantity }) => (
          <ProductItem product={product} quantity={quantity} />
        ))}
      </div>
    </div>
  );
};

export default ShopCard;

const ProductItem = ({ product, quantity }: ShopItem) => {
  const { removeFromCart, changeQuantity } = useShopContext();
  function handleChange(value: number) {
    changeQuantity(product.id, value);
  }

  return (
    <Card className="flex gap-2 p-4 pb-2 w-80">
      <figure className="size-24">
        <img
          className="object-cover rounded bg-gray-10"
          src={product.thumbnail}
          alt="Movie"
        />
      </figure>
      <section className="flex flex-col justify-between flex-grow">
        <header className="flex justify-between ">
          <h3 className="w-40 font-bold truncate">{product.title}</h3>
          <button
            className="btn btn-sm btn-ghost btn-circle"
            onClick={() => removeFromCart(product.id)}
          >
            <TrashIcon />
          </button>
        </header>
        <article className="flex items-center justify-between gap-2">
          <p className="text-lg">${product.price}</p>
          <Counter
            classNameButton="btn-sm"
            count={quantity}
            handleClick={handleChange}
          />
        </article>
      </section>
    </Card>
  );
};
