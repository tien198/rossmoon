import SearchBar from "@/components/layout/SearchBar";
import Banner from "./comps/Banner";
import Image from "next/image";
import { Category } from "@/types/category";
import Link from "next/link";

export default async function Home() {
  const categories = await getCatedories()

  return (
    <>
      {/* Search bar */}
      <SearchBar />
      <Banner />
      <section className=" bg-white py-12">
        <h1 className="text-center text-2xl pb-4 md:text-3xl md:pb-6">Khám phá vũ trụ làm đẹp</h1>
        <div className="flex justify-between flex-wrap px-[6.5vw]">
          {categories.map(cate =>
            <div className="p-2 w-1/2 md:w-1/4" key={cate.url} >
              <Link href={cate.imgUrl} >
                <Image src={cate.imgUrl} alt={cate.name} width={155.5} height={194.38}
                  className="w-full" />
              </Link>
              <p className="py-2 md:py-4 text-center">{cate.name}</p>
            </div>
          )}
        </div>
      </section>
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


async function getCatedories(): Promise<Category[]> {
  return [
    {
      name: 'Son Môi LV Rouge',
      url: '/img',
      imgUrl: '/images/2025/beauty/LV_Rouge_Matte_WW_HP_Category_DII.jpg'
    },
    {
      name: 'Son Dưỡng LV Baume',
      url: '/img',
      imgUrl: '/images/2025/beauty/LV_Balm_WW_HP_Category_DII.jpg'
    },
    {
      name: 'Phấn mắt LV Ombres',
      url: '/img',
      imgUrl: '/images/2025/beauty/LV_Ombres_WW_HP_Category_DII.jpg'
    },
    {
      name: 'Phụ Kiện Làm Đẹp',
      url: '/img',
      imgUrl: '/images/2025/beauty/Beauty_Accessories_WW_HP_Category_DII.jpg'
    }
  ]
}