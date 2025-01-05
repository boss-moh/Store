import { URL_LINKS, useProducts } from "@/constants";
import { Link } from "react-router";
import FilterSection from "./Filter";
import Header from "./header";
import Product from "./Product";
import { AlertMessage, Card, Drawer, Pagination } from "@/components";

export const ShopPage = () => {
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
          </ul>
        </div>
      </section>

      <section className="flex gap-8">
        <FilterSection className="flex-shrink-0 hidden max-w-72 md:block " />

        {isError ? (
          <AlertMessage className=" h-fit">{error.message}</AlertMessage>
        ) : (
          <article className="flex-grow space-y-4">
            <Header />
            <div className="space-y-3 ">
              <div className="grid grid-flow-row grid-cols-3 gap-10 ">
                {products.map((product) => (
                  <Product product={product} />
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
                <Pagination />
              </footer>
            </div>
          </article>
        )}
      </section>
    </div>
  );
};

export default ShopPage;

// const Test = () => (
//   <div className="drawer">
//     <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//     <div className="drawer-content">
//       {/* Page content here */}
//       <div>
//         <h2 className="items-center text-2xl space-between">
//           Main Content
//           <label
//             htmlFor="my-drawer"
//             className="btn btn-md btn-circle text-primary drawer-button"
//           >
//             <FilterIcon />
//           </label>
//         </h2>
//       </div>
//     </div>
//     <aside className="drawer-side ">
//       <label
//         htmlFor="my-drawer"
//         aria-label="close sidebar"
//         className="drawer-overlay"
//       />
//       <Card
//         className="z-10 h-full max-w-xs bg-white rounded-l-none drawer-content"
//         aria-label="Side bar"
//       >
//         <label
//           htmlFor="my-drawer"
//           className="btn btn-sm btn-circle text-primary drawer-button"
//         >
//           <ArrowIcon className="rotate-180" />
//         </label>
//         This Will be
//         <FilterSection />
//       </Card>
//     </aside>
//   </div>
// );

const Test = () => {
  return (
    <Drawer
      id="first Test"
      title="Frist Test"
      drawerContent={<FilterSection />}
    >
      sasd
    </Drawer>
  );
};
