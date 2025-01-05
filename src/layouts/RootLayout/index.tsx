import { Outlet } from "react-router";
import { Nav } from "@/components";

export const RootLayout = () => {
  return (
    <div className="container max-w-screen-xl mx-auto ">
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
