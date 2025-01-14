import { FilterIcon } from "@/assets/icons";
import { useIsMobile } from "@/hooks";

export const Header = ({ category }: { category: string }) => {
  const isMobile = useIsMobile();
  return (
    <header className="flex-grow space-between">
      <h2>{category}</h2>
      <div>
        {/* Showing 1-10 of 100 Products Sort by: */}
        {/* <DropDown
          button={
            <div className="items-center gap-2 space-between">
              <span>Most Popular</span>
              <span>
                <ArrowIcon className="rotate-90" />
              </span>
            </div>
          }
        >
          <li>
            <button>one </button>
          </li>
          <li>
            <button>one </button>
          </li>
        </DropDown> */}
        {isMobile && (
          <label htmlFor="drawer-filter" className="btn btn-sm btn-circle">
            <FilterIcon />
          </label>
        )}
      </div>
    </header>
  );
};

export default Header;
