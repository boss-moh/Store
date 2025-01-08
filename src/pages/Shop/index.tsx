import { URL_LINKS, useProducts } from "@/constants";
import { Link, useSearchParams } from "react-router";
import FilterSection from "./Filter";
import Header from "./header";
import Product from "./Product";
import { AlertMessage, Card, Pagination } from "@/components";
import { usePagiation } from "@/hooks";

export const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") ?? "";

  const {
    currentPage,
    handlePagination: onPagtion,
    hasPrev,
    hasNext,
  } = usePagiation();

  const { products, isLoading, isError, error } = useProducts();

  return (
    <div className="px-6 py-4 ">
      <section>
        <div className=" breadcrumbs">
          <ul>
            <li>
              <Link to={URL_LINKS.HOME}>Home</Link>
            </li>
            <li>
              <Link to={URL_LINKS.SHOP}>Shop</Link>
            </li>
            {category && (
              <li>
                <Link to={"/"}>{category}</Link>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="flex gap-8">
        <FilterSection className="flex-shrink-0 hidden max-w-72 md:block " />

        {isError ? (
          <AlertMessage className=" h-fit">{error.message}</AlertMessage>
        ) : (
          <article className="flex-grow space-y-4">
            <Header category={category || "All Products"} />
            <div className="space-y-3 ">
              <div className="grid grid-flow-row gap-10 grid-cols-3-250px ">
                {products.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
                {isLoading &&
                  products.length === 0 &&
                  Array(10)
                    .fill(0)
                    .map(() => (
                      <Card className="space-y-4 shadow-sm ">
                        <div className="h-60 skeleton"></div>
                        <div className="space-y-4">
                          <div className="h-4 skeleton"></div>
                          <div className="space-y-1">
                            <div className="h-2 skeleton"></div>
                            <div className="h-2 skeleton"></div>
                            <div className="h-2 skeleton"></div>
                            <div className="h-2 skeleton"></div>
                            <div className="h-2 skeleton"></div>
                          </div>
                          <div className="h-8 rounded-md skeleton"></div>
                        </div>
                      </Card>
                    ))}
              </div>
              <footer>
                <div className="my-8 divider"></div>
                <Pagination
                  hasNext={hasNext}
                  hasPrev={hasPrev}
                  currentPage={currentPage}
                  getNext={() => onPagtion("+")}
                  getPrev={() => onPagtion("-")}
                />
              </footer>
            </div>
          </article>
        )}
      </section>
    </div>
  );
};

export default ShopPage;
