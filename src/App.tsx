import { Route, Routes } from "react-router";
import Home from "./pages/home";
import { RootLayout } from "./layouts";
import { URL_LINKS } from "./constants";
import ShopPage from "./pages/Shop";
import ProductPage from "./pages/product";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path={URL_LINKS.SHOP} element={<ShopPage />} />
        <Route path={URL_LINKS.PRODUCT(":id")} element={<ProductPage />} />
      </Route>
    </Routes>
  );
}
