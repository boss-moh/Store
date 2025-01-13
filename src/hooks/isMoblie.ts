import useMediaQuery from "./useMediaQuery";

export const useIsMobile = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return isMobile;
};

export default useIsMobile;
