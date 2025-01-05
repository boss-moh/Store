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

      {/* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}

      {/* <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route> */}
    </Routes>
  );
}
