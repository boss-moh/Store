import { ArrowIcon } from "@/assets/icons";
import Card from "../Card";
import { ChildrenType, divProps } from "@/constants";

type DrawerProps = divProps & {
  titleComponent: ChildrenType;
  children: ChildrenType;
  drawerContent?: ChildrenType;
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
  ...rest
}: DrawerProps) => {
  return (
    <div className={`drawer ${className}`} {...rest}>
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
          className="w-64 h-full max-w-xs bg-white rounded-l-none drawer-content"
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
