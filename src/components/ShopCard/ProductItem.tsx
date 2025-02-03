import { ShopItem, useShopContext } from "@/context";
import Card from "../Card";
import Counter from "../counter";
import { TrashIcon } from "@/assets/icons";

export const ProductItem = ({ product, quantity }: ShopItem) => {
  const { removeFromCart, changeQuantity } = useShopContext();
  function handleChange(value: number) {
    changeQuantity(product.id, value);
  }

  return (
    <Card className="flex gap-2 p-2 pb-2 ">
      <figure className="size-24">
        <img
          className="object-cover h-full rounded bg-gray-10"
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
            classNameButton="btn-xs"
            count={quantity}
            handleClick={handleChange}
          />
        </article>
      </section>
    </Card>
  );
};

export default ProductItem;
