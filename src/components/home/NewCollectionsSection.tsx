import { Collection } from "@/models/collection.zod"
import Image from "next/image"
import Link from "next/link"



export default async function NewCollectionsSection() {
  const categories = await getNewCollections()
  return (
    <section className=" bg-white py-12">
      <h1 className="text-center text-2xl pb-4 md:text-3xl md:pb-6">Khám phá vũ trụ làm đẹp</h1>
      <div className="flex justify-between flex-wrap px-[6.5vw] lg:px-[8.3333vw]">
        {categories.map((cate, idx) =>
          <div className="p-2 w-1/2 md:w-1/4" key={idx} >
            <Link href={cate.url} >
              <Image src={cate.imageUrl} alt={cate.name} width={1600} height={2000} sizes="100"
                className="w-full" />
            </Link>
            <p className="py-2 md:py-4 text-center">{cate.name}</p>
          </div>
        )}
      </div>
    </section>
  )
}




async function getNewCollections(): Promise<Collection[]> {
  return [
    {
      name: 'Son Môi LV Rouge',
      url: '/collection-url',
      imageUrl: '/images/2025/beauty/LV_Rouge_Matte_WW_HP_Category_DII.jpg',
      gender: 'female',
      releaseDate: "2025-07-02T03:51:27.282Z"
    },
    {
      name: 'Son Dưỡng LV Baume',
      url: '/collection-url',
      imageUrl: '/images/2025/beauty/LV_Balm_WW_HP_Category_DII.jpg',
      gender: 'female',
      releaseDate: "2025-07-02T03:51:27.282Z"
    },
    {
      name: 'Phấn mắt LV Ombres',
      url: '/collection-url',
      imageUrl: '/images/2025/beauty/LV_Ombres_WW_HP_Category_DII.jpg',
      gender: 'female',
      releaseDate: "2025-07-02T03:51:27.282Z"
    },
    {
      name: 'Phụ Kiện Làm Đẹp',
      url: '/collection-url',
      imageUrl: '/images/2025/beauty/Beauty_Accessories_WW_HP_Category_DII.jpg',
      gender: 'female',
      releaseDate: "2025-07-02T03:51:27.282Z",
    }
  ] as Collection[]
}