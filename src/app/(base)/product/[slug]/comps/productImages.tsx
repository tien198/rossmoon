import type { Product } from "@/schemas/client/product.zod";
import Image from "next/image";

import styles from '../product.module.scss'

type Props = {
    prod: Partial<Product>
}

export default function ProductImages({ prod }: Props) {
    return <>
        {
            prod?.attributes?.medias.map((i, idx) =>
                <div key={idx} className={styles['image-container']}>
                    <Image
                        src={i?.url ?? ''}
                        alt={prod.name ?? ''} width={400} height={400}
                        priority
                        className='w-full h-full object-center object-contain'
                        draggable='false'
                    />
                </div>
            )
        }
    </>
}