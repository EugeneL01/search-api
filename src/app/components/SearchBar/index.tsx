"use client";

import { fetchResults } from "@/store/api/search-data";

const SearchBar = async ({ searchResults }: { searchResults: any }) => {

  console.log("API DATA:", searchResults);

  return (
    <>
      <div>
        {searchResults.map((result: any, index: number) => {
          return <div key={index}>{result.artistName}</div>;
        })}
      </div>
    </>
  );
};

export default SearchBar;
