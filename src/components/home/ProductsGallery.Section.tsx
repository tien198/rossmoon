'use client'

import { Gallery } from "@/types/gallery";
import Image from "next/image";


export default function ProductsGallery() {
    const gallery = getGallery()

    const ORIGIN = process.env.ORIGIN as string
    return (
        <>
            <section >
                {/* <Video
                    sources={bannerViSources} autoPlay loop muted playsInline
                    className="h-full md:w-full object-cover"
                /> */}
                <div>
                    <picture className="object-cover sticky top-[4rem] -z-10">
                        <source media="(min-width:768px)" width={1920} height={1080} srcSet={ORIGIN + gallery.desktopBanner} />
                        <Image src={gallery.mobileBanner!} alt={gallery.title} width={1600} height={2000} />
                    </picture>


                    <div className="bg-white ">
                        <div className="text-center py-6 md:py-12">
                            <p className="text-xs md:text-xs uppercase pb-2 md:pb-3">{gallery.category.name}</p>
                            <h1 className="text-2xl md:text-3xl">{gallery.title}</h1>
                        </div>
                        <div className="flex justify-between flex-wrap px-[6.5vw] lg:px-[8.3333vw]">
                            <div className="h-96"></div>
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
                    </div>
                </div>
            </section>
        </>
    )
}


function getGallery(): Gallery {
    return {
        title: 'Các thiết kế mới',
        category: {
            name: 'Dành cho nữ',
        },
        bannerType: 'image',
        desktopBanner: '/images/banners/W_BC_TEXTILES_SHAWLS_096_Aug2025_DI3.jpg',
        mobileBanner: '/images/banners/W_BC_TEXTILES_SHAWLS_096_Aug2025_DII.jpg',
        products: []
    }
}