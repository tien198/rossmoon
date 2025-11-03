import { MagazineFeaturePart } from '@/shared/schemas/server/magazineFeature.zod';
import { ProductPart } from '@/shared/schemas/server/product.zod';
import Image from 'next/image';

import styles from './productCard.module.scss'
import Link from 'next/link';

export default function Feature(fea: MagazineFeaturePart) {
    return (
        <>
            {
                fea.bannerImage
                && <div className='col-span-2 row-span-2 overflow-hidden aspect-[3/4]'>
                    <Image src={fea.bannerImage.desktopUrl!} alt={(fea.title ?? fea.products?.[0]?.name) || 'alt'} height={800} width={800} className='h-full w-full object-cover' />
                </div>
            }
            {fea.products?.map(prod =>
                <ProductCard {...prod} key={prod._id?.toString()} />
            )}
        </>
    )
}


function ProductCard(prod: ProductPart) {
    return (
        <Link href={'/product/' + (prod.slug ?? '')}
            className={'relative w-full aspect-[2.5/4] md:aspect-[3/4]' +
                ' ' + styles['card']}
        >
            <div className={styles['card__container-border']}></div>
            <Image
                src={prod?.medias?.[0]?.url ?? ''}
                alt={prod.name!} width={800} height={800}
                className='w-full'
                priority
            />
            <span
                className='absolute left-3 bottom-4 
                    md:left-15 md:bottom-15
                    flex flex-col gap-3'
            >
                <span className={styles['shadow']}>
                    {prod.name}
                </span>
                <span>
                    {prod.price?.toLocaleString()} <sup>đ</sup>
                </span>
            </span>
        </Link>
    )
}