import type { Product } from "@/shared/schema/client/product.zod";
import Image from "next/image";

import styles from '../product.module.scss'

type Props = {
    prod: Partial<Product>
}

export default function ProductImages({ prod }: Props) {
    return <>
        {
            prod?.medias?.map((i, idx) =>
                <div key={idx} className={styles['image-container']}>
                    <Image
                        src={i?.url ?? ''}
                        alt={prod.name ?? ''} width={1100} height={1100}
                        priority
                        className='w-full h-full object-center object-contain'
                        draggable='false'
                    />
                </div>
            )
        }
    </>
}