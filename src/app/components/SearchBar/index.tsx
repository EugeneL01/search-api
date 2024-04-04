"use client";

import { fetchSearchResults } from "@/store/api/search-data";
import "./style.scss";
import Image from "next/image";
import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = async (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
    const results = await fetchSearchResults(value);
    setSearchResults(results);

    return results;
  };

  return (
    <>
      <div className="flex flex-row flex-wrap gap-[20px]">
        <input
          type="text"
          id="inputText"
          placeholder="Type something..."
          value={inputValue}
          onChange={handleInput}
        />
        {searchResults?.map((result: any, index: number) => {
          return (
            <div key={index} className="max-w-[100px]">
              <Image
                className=""
                src={result.artworkUrl100}
                alt="Cover"
                width={1000}
                height={1000}
                priority
              />
              {result.artistName}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;
