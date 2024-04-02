"use client";

import "./style.scss";
import Image from "next/image";
import { useRef, useState } from "react";
import { store } from "@/store/module/search";

const SearchBar = ({ searchResults }: { searchResults: any }) => {
  // console.log("API DATA:", searchResults);

  const { fetchParam } = store;

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue: any = event.currentTarget.value;

    fetchParam(inputValue);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap gap-[20px]">
        <input
          type="text"
          id="inputText"
          placeholder="Type something..."
          onInput={handleInput}
        />
        {searchResults?.map((result: any, index: number) => {
          return (
            <div key={index} className="max-w-[100px]">
              <Image
                className=""
                src={result.artworkUrl100}
                alt="Next.js Logo"
                width={100}
                height={100}
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
