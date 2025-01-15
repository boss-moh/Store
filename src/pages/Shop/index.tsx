import { URL_LINKS, useProducts } from "@/constants";
import { Link } from "react-router";
import FilterSection from "./Filter";
import Header from "./header";
import Product from "./Product";
import { AlertMessage, Card, Pagination } from "@/components";
import { usePagiation } from "@/hooks";

import { useIsMobile } from "@/hooks";

export const ShopPage = () => {
  const isMobile = useIsMobile();

  const {
    currentPage,
    handlePagination: onPagtion,
    hasPrev,
    hasNext,
  } = usePagiation();

  const {
    products,
    isFetching: isLoading,
    isError,
    error,
    titleForUI,
  } = useProducts();

  const isNoProducts = !isLoading && !products.length;
  return (
    <div className="px-6 py-4 ">
      <article>
        <div className=" breadcrumbs">
          <ul>
            <li>
              <Link to={URL_LINKS.HOME}>Home</Link>
            </li>
            <li>
              <Link to={URL_LINKS.SHOP}>Shop</Link>
            </li>
            {titleForUI && (
              <li>
                <Link to={"/"}>{titleForUI}</Link>
              </li>
            )}
          </ul>
        </div>
      </article>

      <section className="flex gap-8">
        {!isMobile && (
          <FilterSection className="flex-shrink-0 hidden max-w-72 md:block " />
        )}
        <article className="flex-grow space-y-4">
          <Header category={titleForUI} />

          {isError ? (
            <AlertMessage className=" h-fit">{error.message}</AlertMessage>
          ) : isNoProducts ? (
            <AlertMessage className=" h-fit !alert-info">
              There are No Products
            </AlertMessage>
          ) : (
            <div className="space-y-3 ">
              <div className="grid grid-flow-row gap-10 grid-cols-3-250px ">
                {!isLoading &&
                  products.map((product) => (
                    <Product key={product.id} product={product} />
                  ))}
                {isLoading &&
                  Array(9)
                    .fill(0)
                    .map((_, key) => (
                      <Card className="space-y-4 shadow-sm " key={key}>
                        <div className="h-80 skeleton"></div>
                        <div className="h-4 skeleton"></div>
                        <div className="space-y-1">
                          <div className="h-4 skeleton"></div>
                          <div className="h-4 skeleton"></div>
                          <div className="h-4 skeleton"></div>
                          <div className="h-4 skeleton"></div>
                          <div className="h-4 skeleton"></div>
                        </div>
                        <div className="h-8 rounded-md skeleton"></div>
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
          )}
        </article>
      </section>
    </div>
  );
};

export default ShopPage;
