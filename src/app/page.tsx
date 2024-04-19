import Search from "./components/Search";
import { fetchSearchResults } from "@/store/api/search-data";

const Home = async () => {
const results = await fetchSearchResults('livingston')

  return (
    <main className="min-h-screen">
      <div className="px-[30px] pt-[40px]">
        <Search results={results}/>
      </div>
    </main>
  );
};

export default Home;
