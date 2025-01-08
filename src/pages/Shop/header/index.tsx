import { ArrowIcon } from "@/assets/icons";
import { DropDown } from "@/components";

export const Header = ({ category }: { category: string }) => {
  return (
    <header className="flex-grow space-between">
      <h2>{category}</h2>
      <div>
        Showing 1-10 of 100 Products Sort by:
        <DropDown
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
        </DropDown>
      </div>
    </header>
  );
};

export default Header;
