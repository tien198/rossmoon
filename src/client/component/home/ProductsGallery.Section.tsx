import type { Gallery } from "@/client/type/gallery";

import Image from "next/image";
import Link from "next/link";

type Props = {
    gallery: Gallery
}

export default function ProductsGallery({ gallery }: Props) {

    const ORIGIN = process.env.ORIGIN as string
    return (
        <>
            <section className="py-12">
                {/* <Video
                    sources={bannerViSources} autoPlay loop muted playsInline
                    className="h-full md:w-full object-cover"
                /> */}
                <picture className="object-cover sticky top-[4rem] md:static -z-10">
                    <source media="(min-width:768px)" width={1920} height={1080} srcSet={ORIGIN + gallery.desktopBanner} />
                    <Image src={gallery.mobileBanner!} alt={gallery.title} width={1600} height={2000} />
                </picture>

                <div className="bg-white">
                    <div className="text-center py-6 md:py-12">
                        <p className="text-xs md:text-xs uppercase pb-2 md:pb-3">{gallery.category.name}</p>
                        <h1 className="text-2xl md:text-3xl">{gallery.title}</h1>
                    </div>
                    <div className="flex justify-between flex-wrap px-[6.5vw] lg:px-[8.3333vw]">
                        {gallery.products.map((prod, idx) =>
                            <div className="p-2 w-1/2 md:w-1/4" key={idx}>
                                <div className="product-picture-backgound">
                                    <Link href={prod.productURL}>
                                        <Image src={prod.imageUrls[0]} alt={prod.name} width={1600} height={2000} sizes="100"
                                            className="w-full"
                                        />
                                    </Link>
                                </div>
                                <p className="py-2 md:py-4 text-center">{prod.name}</p>
                            </div>
                        )}
                        <div className="w-full text-center py-12">
                            <Link href={gallery.galleryUrl} className="px-12 py-4 bg-gray-500">Xem thêm</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

