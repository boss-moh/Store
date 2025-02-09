import { Counter } from "@/components";
import { productType } from "@/constants";
import { useShopContext } from "@/context";
import { useState } from "react";

const ActionsButtons = ({ product }: { product: productType }) => {
  const { addToCart, checkItem } = useShopContext();
  const isInSideCard = checkItem(product.id);
  const [quantity, setQuantity] = useState(1);
  function handleClick(changeCount: number) {
    setQuantity((prev) => prev + changeCount);
  }
  const shopItem = {
    product,
    quantity,
  };
  return (
    <article className="flex gap-2">
      {isInSideCard ? (
        <button className="flex-grow btn btn-primary " disabled>
          The Product In side Card
        </button>
      ) : (
        <>
          <Counter count={quantity} handleClick={handleClick} />
          <button
            className="flex-grow btn btn-primary "
            onClick={() => addToCart(shopItem)}
          >
            Add To Card
          </button>
        </>
      )}
    </article>
  );
};

export { ActionsButtons };
export default ActionsButtons;
