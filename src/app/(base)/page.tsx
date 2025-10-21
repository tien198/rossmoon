import SearchBar from "@/components/layout/SearchBar";
import StoryBanner from "../../components/home/StoryBanner";
import NewCollectionsSection from "@/components/home/NewCollections.Section";
import ProductsGallery from "@/components/home/ProductsGallery.Section";
import { getGallery_1st, getGallery_2nd } from "@/components/home/services/getGallery";

export const revalidate = false

export default async function Home() {
  const gallery_1st = getGallery_1st()
  const gallery_2nd = getGallery_2nd()
  return (
    <>
      {/* Search bar */}
      <SearchBar />
      <StoryBanner />
      <NewCollectionsSection />
      <ProductsGallery gallery={gallery_1st} />
      <ProductsGallery gallery={gallery_2nd} />
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

