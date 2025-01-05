import { FilterIcon } from "@/assets/icons";
import { AlertMessage, Card } from "@/components";
import AsideLink from "../asideLink";
import AsideCard from "../AsideCard";
import { API_END_POINT, categoryType, COLORS, divProps } from "@/constants";
import { axios, useQuery } from "@/libs";

const FilterSection = ({ className = "", ...rest }: divProps) => {
  const {
    data: categories,
    error,
    isPending,
    isFetched,
    isError,
  } = useQuery({
    queryKey: ["CATEGORIES"],
    queryFn: () =>
      axios.get(API_END_POINT.CATEGORIES) as Promise<categoryType[]>,
    staleTime: Infinity,
  });
  return (
    <aside className={className} {...rest}>
      <Card className="h-full space-y-4">
        <h3 className="flex items-center justify-between">
          <span className="text-xl font-medium">Filters</span>
          <span>
            <FilterIcon className="hidden md:block" />
            {/* <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay md:hidden"
            >
              X
            </label> */}
          </span>
        </h3>
        <div className="divider divider-secondary"></div>
        <div>
          {isPending && (
            <div className="flex flex-col gap-2">
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
              <div className="w-full h-4 skeleton"></div>
            </div>
          )}

          {categories?.map((category) => (
            <AsideLink key={category.id} to={"/"}>
              {category.name}
            </AsideLink>
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
        </div>
        <div className="divider divider-secondary"></div>
        <AsideCard className="space-y-3" title="Price">
          <input
            type="range"
            min={0}
            max="100"
            className="range-xs range range-primary"
          />
        </AsideCard>
        <AsideCard className="space-y-3" title="Colors">
          <div className="flex flex-wrap gap-2">
            {COLORS.map(({ color }) => (
              <button
                key={color}
                className={` btn btn-sm btn-circle border-gray-10  bg-${color}-500 hover:bg-${color}-600`}
              ></button>
            ))}
          </div>
        </AsideCard>
        <AsideCard className="space-y-3" title="Sizes">
          <div className="flex flex-wrap gap-2 ">
            {[
              "2X-Small",
              "X-Small",
              "Small",
              "Medium",
              "Large",
              "X-Large",
              "2X-Large",
            ].map((size) => (
              <button
                key={size}
                className={"btn btn-sm bg-gray rounded-full border-gray-10  "}
              >
                {size}
              </button>
            ))}
          </div>
        </AsideCard>
        <AsideCard className="space-y-3" title="Dress Style">
          {["Casual", "Formal", "Party", "Gym"].map((type) => (
            <AsideLink to={"/"} key={type}>
              {type}
            </AsideLink>
          ))}
        </AsideCard>
        <button className="w-full rounded-full btn btn-primary btn-md">
          Apply Filter
        </button>
      </Card>
    </aside>
  );
};

export default FilterSection;
