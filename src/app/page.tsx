import Image from "next/image";
import SearchBar from "./components/SearchBar";
import { fetchSearchResults, getSearchData } from "@/store/api/search-data";

const Home = async () => {
  // const data = await fetchSearchResults([]);

  // const data = getSearchData();

  return (
    <main className="flex min-h-screen justify-center items-center">
      <SearchBar />
      {/* {data?.map((result: any, index: number) => {
        return (
          <div key={index} className="max-w-[100px]">
            <Image
              className=""
              src={result.artworkUrl100}
              alt="Cover"
              width={100}
              height={100}
              priority
            />
            {result.artistName}
          </div>
        );
      })} */}
    </main>
  );
};

export default Home;
