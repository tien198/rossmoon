import { CollectionDTO } from "@/shared/schemas/client/collection.zod"
import Image from "next/image"
import Link from "next/link"



export default async function NewCollectionsSection() {
  const collections = await getNewCollections()
  return (
    <section className=" bg-white py-12">
      <h1 className="text-center text-2xl pb-4 md:text-3xl md:pb-6">Khám phá vũ trụ làm đẹp</h1>
      <div className="flex justify-between flex-wrap px-[6.5vw] lg:px-[8.3333vw]">
        {collections.map((col, idx) =>
          <div className="p-2 w-1/2 md:w-1/4" key={idx} >
            <Link href={col.slug!??''} >
              <Image src={col.bannerImage?.desktopUrl??''} alt={col.name} width={1600} height={2000} sizes="100"
                className="w-full" />
            </Link>
            <p className="py-2 md:py-4 text-center">{col.name}</p>
          </div>
        )}
      </div>
    </section>
  )
}




async function getNewCollections(): Promise<CollectionDTO[]> {
  return [
    {
      name: 'Son Môi LV Rouge',
      slug: 'collection-url',
      bannerImage: {
        desktopUrl: '/images/2025/beauty/LV_Rouge_Matte_WW_HP_Category_DII.jpg'
      },
      createdAt: "2025-07-02T03:51:27.282Z"
    },
    {
      name: 'Son Dưỡng LV Baume',
      slug: 'collection-url',
      bannerImage: {
        desktopUrl: '/images/2025/beauty/LV_Balm_WW_HP_Category_DII.jpg'
      },
      createdAt: "2025-07-02T03:51:27.282Z"
    },
    {
      name: 'Phấn mắt LV Ombres',
      slug: 'collection-url',
      bannerImage: {
        desktopUrl: '/images/2025/beauty/LV_Ombres_WW_HP_Category_DII.jpg'
      },
      createdAt: "2025-07-02T03:51:27.282Z"
    },
    {
      name: 'Phụ Kiện Làm Đẹp',
      slug: 'collection-url',
      bannerImage: {
        desktopUrl: '/images/2025/beauty/Beauty_Accessories_WW_HP_Category_DII.jpg'
      },
      createdAt: "2025-07-02T03:51:27.282Z",
    }
  ] as CollectionDTO[]
}