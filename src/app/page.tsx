import SearchBar from "@/components/layout/SearchBar";
import Banner from "./comps/Banner";

export default function Home() {
  return (
    <main >
      {/* Search bar */}
      <div className="h-16"></div>
      <SearchBar />
      <Banner />
    </main>
  );
}
