import { ArrowIcon } from "@/assets/icons";
import Card from "../Card";
import { ChildrenType, divProps } from "@/constants";
import { tw } from "@/libs";

type DrawerProps = divProps & {
  titleComponent: ChildrenType;
  children: ChildrenType;
  drawerContent?: ChildrenType;
  drawerClassName?: string;
  id: string;
};
/**
 * How To Use Drawer
 * put it in Drawer component in main with id
 * <label htmlFor="id"></label>
 */
export const Drawer = ({
  titleComponent,
  children,
  drawerContent,
  className,
  id,
  drawerClassName = "",
  ...rest
}: DrawerProps) => {
  return (
    <div className={`drawer  ${className}`} {...rest}>
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {children}

        {/* as Children */}
      </div>
      <aside className="drawer-side ">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <Card
          className={tw(
            " min-h-full bg-white rounded-l-none  w-full md:max-w-xs  drawer-content",
            drawerClassName
          )}
          aria-label="Side bar"
        >
          <header className="flex items-center gap-4">
            <label
              htmlFor={id}
              className="btn btn-sm btn-circle text-primary drawer-button"
            >
              <ArrowIcon className="rotate-180" />
            </label>
            <h3 className="justify-self-center">{titleComponent}</h3>
          </header>
          {drawerContent}
        </Card>
      </aside>
    </div>
  );
};

export default Drawer;
