"use client";

import "../style.scss";
import Image from "next/image";

const SearchResults = (results: any) => {
  return (
    <>
      <div className="grid min-[1050px]:grid-cols-10 min-[700px]:grid-cols-5 grid-cols-2 gap-[20px] pt-[20px]">
        {results?.results.map((result: any, index: number) => {
          return (
            <div key={index} className="w-full">
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

export default SearchResults;
