import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { AllDrawers, ReactQueryLib } from "@/libs";
import { ShopContextProvider } from "./context";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryLib>
      <BrowserRouter>
        <ShopContextProvider>
          <AllDrawers>
            <App />
          </AllDrawers>
        </ShopContextProvider>
      </BrowserRouter>
    </ReactQueryLib>
  </StrictMode>
);
