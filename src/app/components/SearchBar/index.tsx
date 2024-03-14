"use client";

import "./style.scss"

const SearchBar = ({ searchResults }: { searchResults: any }) => {

  // console.log("API DATA:", searchResults);

  return (
    <>
      <div className="">
        {searchResults?.map((result: any, index: number) => {
          return <div key={index}>{result.artistName}</div>;
        })}
      </div>
    </>
  );
};

export default SearchBar;
