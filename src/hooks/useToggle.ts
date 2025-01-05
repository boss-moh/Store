import { useState } from "react";

export const useToggle = (defaultValue?: boolean) => {
  const [state, setState] = useState<boolean>(defaultValue ?? false);
  const open = () => setState(true);
  const close = () => setState(false);
  const toggle = () => setState((prev) => !prev);
  return {
    isOpen: state,
    open,
    close,
    toggle,
  };
};

export default useToggle;
