import { MagazineFeaturePart } from "@/models/magazineFeature.zod";
import { ProductPart } from "@/models/product.zod";
import Image from "next/image";

import styles from "./productCard.module.scss"

export default function Feature(fea: MagazineFeaturePart) {
    return (
        <>
            {
                fea.bannerImage
                && <div className="col-span-2 row-span-2 overflow-hidden aspect-[3/4]"><Image src={fea.bannerImage.desktopUrl!} alt={(fea.title ?? fea.products?.[0]?.name) || 'alt'} height={300} width={300} className="h-full w-full object-cover" /></div>
            }
            {fea.products?.map(prod =>
                <ProductCard {...prod} key={prod._id?.toString()} />
            )}
        </>
    )
}


function ProductCard(prod: ProductPart) {
    return (
        <div className={"relative w-full aspect-[2.5/4] md:aspect-[3/4] "+ styles['card']}>
            <div className={styles['card__container-border']}></div>
            <Image src={prod.attributes?.medias[0]?.url ?? ''} alt={prod.name!} width={300} height={300} />
            <span className="absolute left-3 bottom-4 md:left-15 md:bottom-15 flex flex-col gap-3">
                <span className={styles['shadow']}>{prod.name}</span>
                <span>{prod.price?.toLocaleString()} <sup>đ</sup></span>
            </span>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem cumque debitis sed repellendus molestias laudantium vitae atque odit impedit beatae, enim perferendis similique qui tempore fugit! Aut, rem quos? */}
        </div>
    )
}