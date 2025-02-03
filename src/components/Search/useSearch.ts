import { useState } from "react";

import { useEffect } from "react";
import { useSearchParams } from "react-router";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [, setSearchParams] = useSearchParams();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchParams({ search });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);
  return { search, handleSearch };
};

export default useSearch;
