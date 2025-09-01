import SearchBar from "@/components/layout/SearchBar";
import StoryBanner from "../components/home/StoryBanner";
import NewCollectionsSection from "@/components/home/NewCollections.Section";
import ProductsGallery from "@/components/home/ProductsGallery.Section";

export default async function Home() {

  return (
    <>
      {/* Search bar */}
      <SearchBar />
      <StoryBanner />
      <NewCollectionsSection />
      <ProductsGallery />
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

