import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router";
import { ReactQueryLib } from "@/libs";
import { Drawer } from "./components/index.ts";
import NavLinks from "./components/Nav/NavLinks/index.tsx";
import { Logo } from "@/components";
createRoot(document.getElementById("root")!).render(
  <ReactQueryLib>
    <BrowserRouter>
      <StrictMode>
        <Drawer id="drawer-shop" titleComponent={"Shop"} className="drawer-end">
          <Drawer
            id="drawer-nav-links"
            titleComponent={<Logo />}
            drawerContent={<NavLinks />}
          >
            <App />
          </Drawer>
        </Drawer>
      </StrictMode>
    </BrowserRouter>
  </ReactQueryLib>
);
