import SearchBar from "./components/SearchBar";
import { fetchResults } from "@/store/api/search-data";
// import Image from "next/image";

const Home = async() => {
  const data = await fetchResults()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}
      <SearchBar searchResults={data}/>
    </main>
  );
}

export default Home
