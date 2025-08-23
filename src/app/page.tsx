import SearchBar from "@/components/layout/SearchBar";
import Banner from "./comps/Banner";

export default function Home() {
  return (
    <main >
      {/* Search bar */}
      <div className="h-18"></div>
      <SearchBar />
      <Banner />
    </main>
  );
}
