import SearchBar from "./components/SearchBar";
import { fetchSearchResults } from "@/store/api/search-data";
import { store } from "@/store/module/search";

const Home = async () => {
  const { fetchParam } = store

  const data = await fetchSearchResults('');

  return (
    <main className="flex min-h-screen justify-center items-center">
      <SearchBar searchResults={data} />
    </main>
  );
};

export default Home;
