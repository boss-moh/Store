import { useEffect, useState } from "react";
import { Input } from "@/components/input";
import { useSearchParams } from "react-router";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [, setSearchParams] = useSearchParams();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    console.log(search);
    const timeout = setTimeout(() => {
      setSearchParams({ search });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);
  return (
    <Input
      className="hidden lg:flex"
      InputProps={{
        placeholder: "Search For Product",
        onChange: handleSearch,
        value: search,
      }}
    />
  );
};

export default Search;
