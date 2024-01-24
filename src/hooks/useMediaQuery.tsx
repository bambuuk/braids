import { useMediaQuery as useQuery } from "react-responsive";

export const useMediaQuery = () => {
  const isMobile = useQuery({ query: "(min-width: 320px)" });
  const isSmallTablet = useQuery({ query: "(min-width: 576px)" });
  const isTablet = useQuery({ query: "(min-width: 768px)" });
  const isDesktop = useQuery({ query: "(min-width: 1280px)" });
  return {
    isMobile,
    isSmallTablet,
    isTablet,
    isDesktop,
  };
};

export default useMediaQuery;
