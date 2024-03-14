"use client";

import "./style.scss"
import Image from "next/image";

const SearchBar = ({ searchResults }: { searchResults: any }) => {

  // console.log("API DATA:", searchResults);

  return (
    <>
      <div className="">
        {searchResults?.map((result: any, index: number) => {
          return (
            <div key={index}>
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
          )
        })}
      </div>
    </>
  );
};

export default SearchBar;
