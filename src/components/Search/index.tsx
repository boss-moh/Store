import { useEffect, useRef } from "react";
import { Input } from "@/components/input";
import { useSearch } from "./useSearch";

export const Search = () => {
  const { search, handleSearch } = useSearch();

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Windows key (metaKey) or Command key (metaKey) + K
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault(); // Prevent default browser behavior
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Input
      InputProps={{
        placeholder: "Search For Product",
        onChange: handleSearch,
        value: search,
        ref: inputRef,
        "aria-label": "Search Input For Products",
      }}
    />
  );
};

export default Search;
