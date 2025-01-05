import NavLinks from "./NavLinks";
import { Input, Logo } from "@/components";
import { FilterIcon, ShopIcon } from "@/assets/icons";

export const Nav = () => {
  return (
    <nav className="justify-between gap-4 px-6 py-4 navbar">
      <div className="navbar-start ">
        <label htmlFor="drawer-nav-links">
          <FilterIcon className="mr-2 cursor-pointer lg:hidden" />
        </label>
        <Logo />
      </div>
      <NavLinks className={"hidden navbar-center "} />
      <div className="space-x-2  navbar-end">
        <Input className="hidden lg:flex" />
        <label
          htmlFor={"drawer-shop"}
          className=" btn btn-md btn-circle text-primary drawer-button"
        >
          <ShopIcon />
        </label>
      </div>
    </nav>
  );
};

export default Nav;
