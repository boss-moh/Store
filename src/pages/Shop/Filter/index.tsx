import { FilterIcon } from "@/assets/icons";
import { AlertMessage, Card } from "@/components";
import { divProps, useCategories } from "@/constants";
import { useIsMobile } from "@/hooks";
import Search from "@/components/Search";
import { Link } from "react-router";

const FilterSection = ({ className = "", ...rest }: divProps) => {
  const { categories, isPending, isError, isFetched, error } = useCategories();
  const isMobile = useIsMobile();
  return (
    <aside className={className} {...rest}>
      <Card className="w-full space-y-4 md:w-72">
        <header>
          <h3 className="flex items-center justify-between">
            <span className="text-xl font-medium">Filters</span>
            <span>
              <FilterIcon className="hidden md:block" />
            </span>
          </h3>
        </header>
        <div className="divider divider-secondary"></div>
        {isMobile && (
          <>
            <Search />
            <div className="divider divider-secondary"></div>
          </>
        )}
        <h3>Categories</h3>

        <article>
          {isPending && (
            <div className="flex flex-col gap-2">
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
            </div>
          )}

          {categories?.map((category) => (
            <Link
              className={` border-none btn-sm btn hover:bg-gray-10 btn-ghost flex`}
              to={`?category=${category}`}
              key={category}
            >
              <span>{category}</span>
            </Link>
          ))}

          {isError && (
            <AlertMessage>
              <span className="text-sm">
                Oops!
                <br /> {error.message}
              </span>
            </AlertMessage>
          )}
          {isFetched && !isError && categories?.length === 0 && (
            <AlertMessage>
              <span className="text-sm">
                Oops!
                <br /> You Don't have Categories
              </span>
            </AlertMessage>
          )}
        </article>
      </Card>
    </aside>
  );
};

export default FilterSection;
