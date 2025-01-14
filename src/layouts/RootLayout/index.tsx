import { Outlet } from "react-router";
import { Nav } from "@/components";
import Footer from "./Footer";

export const RootLayout = () => {
  console.log("RootLayout");
  return (
    <div className="container flex flex-col justify-between max-w-screen-xl min-h-screen mx-auto">
      <div className="min-h-screen">
        <header>
          <Nav />
        </header>
        <main>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
