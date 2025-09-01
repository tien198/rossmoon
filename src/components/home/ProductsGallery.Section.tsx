import { Gallery } from "./types/gallery";


export default function ProductsGallery(prop: any) {

    return (
        <>
            <section className=" bg-white py-12">
                {/* <Video
                    sources={bannerViSources} autoPlay loop muted playsInline
                    className="h-full md:w-full object-cover"
                /> */}
                <div className="text-center pb-4 md:pb-6">
                    <p className="text-xs md:text-xs uppercase pb-2 md:pb-3">Dành cho nữ (cateName)</p>
                    <h1 className="text-2xl md:text-3xl">Các thiết kế mới</h1>
                </div>
                <div className="flex justify-between flex-wrap px-[6.5vw] lg:px-[8.3333vw]">
                    {/* {collections.map((col, idx) =>
                        <div className="p-2 w-1/2 md:w-1/4" key={idx} >
                            <Link href={col.url} >
                                <Image src={col.imageUrl} alt={col.name} width={1600} height={2000} sizes="100"
                                    className="w-full" />
                            </Link>
                            <p className="py-2 md:py-4 text-center">{col.name}</p>
                        </div>
                    )} */}
                </div>
            </section>
        </>
    )
}



async function getGallery(): Promise<Gallery> {
    return {
        bannerType: 'image',
        bannerImage: '/images/banners/W_BC_TEXTILES_SHAWLS_096_Aug2025_DI3.jpg'
    }
}