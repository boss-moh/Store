import { Drawer, Logo, ShopCard } from "@/components";
import NavLinks from "@/components/Nav/NavLinks";
import { childrenProps } from "@/constants";
import { useIsMobile } from "@/hooks";
import FilterSection from "@/pages/Shop/Filter";

export const AllDrawers = ({ children }: childrenProps) => {
  const isMobile = useIsMobile();
  return (
    <Drawer
      id="drawer-shop"
      drawerContent={<ShopCard />}
      titleComponent={"Shop"}
      className="w-full drawer-end"
    >
      {isMobile ? (
        // mobile drawers
        <Drawer
          id="drawer-nav-links"
          titleComponent={<Logo />}
          drawerContent={<NavLinks />}
        >
          <Drawer
            id="drawer-filter"
            titleComponent={"Filter"}
            drawerContent={<FilterSection />}
            className="w-full"
          >
            {children}
          </Drawer>
        </Drawer>
      ) : (
        children
      )}
    </Drawer>
  );
};

export default AllDrawers;
