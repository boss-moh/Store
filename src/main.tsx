import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.tsx";
import "./index.css";

import { ReactQueryLib } from "@/libs";
import NavLinks from "./components/Nav/NavLinks/index.tsx";
import { Logo, ShopCard, Drawer } from "@/components";
import { ShopContextProvider } from "./context";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryLib>
      <BrowserRouter>
        <ShopContextProvider>
          <Drawer
            id="drawer-shop"
            drawerContent={<ShopCard />}
            titleComponent={"Shop"}
            className=" drawer-end"
          >
            <Drawer
              id="drawer-nav-links"
              titleComponent={<Logo />}
              drawerContent={<NavLinks />}
            >
              <App />
            </Drawer>
          </Drawer>
        </ShopContextProvider>
      </BrowserRouter>
    </ReactQueryLib>
  </StrictMode>
);
