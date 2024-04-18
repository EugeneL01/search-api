import SearchBar from "./components/SearchBar";
import { fetchSearchResults } from "@/store/api/search-data";

const Home = async () => {
const results = await fetchSearchResults('livingston')

  return (
    <main className="min-h-screen">
      <div className="px-[30px] pt-[40px]">
        <SearchBar results={results}/>
      </div>
    </main>
  );
};

export default Home;
