import SearchBar from "@/components/layout/SearchBar";
import Banner from "./comps/Banner";
import CategoriesSection from "./comps/CategoriesSection";

export default async function Home() {

  return (
    <>
      {/* Search bar */}
      <SearchBar />
      <Banner />
      <CategoriesSection />
    </>
  );
}


{/* <Image
  className="w-full h-3/5 sticky top-[5rem]"
  src={"/river-forest-sunset-landscape-art.jpg"}
  width={3840} height={2160}
  priority
  sizes="75"
  style={{ objectFit: 'cover' }} alt="" /> */}

