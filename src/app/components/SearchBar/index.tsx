"use client";

import { fetchSearchResults } from "@/store/api/search-data";
import "./style.scss";
import Image from "next/image";
import { useState } from "react";

const SearchBar = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [toggleSearch, setToggleSearch] = useState(false)

  const handleSearchValue = (event: any) => {
    if (event.key === "Enter") {
      getResults(event);
    } else {
      const value = event.currentTarget.value;
      setSearchInputValue(value);
    }
  };

  const getResults = async (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const results = await fetchSearchResults(value);
    setSearchResults(results);

    return results;
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="search-box">
          <input
            className={`search-text ${toggleSearch ? 'w-[240px]' : 'w-0'}`}
            type="text"
            id="inputText"
            placeholder="Type something..."
            value={searchInputValue}
            onChange={handleSearchValue}
            onKeyDown={handleSearchValue}
          />
          <div onClick={() => {setToggleSearch(true)}} className={`search-btn ${toggleSearch ? 'bg-white text-black' : 'bg-[#2f3640] text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-[20px]">
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
      </div>
    </>
  );
};

export default SearchBar;
