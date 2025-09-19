import { PropsWithChildren } from "react";
import Image from "next/image";
import ProductImp from "@/models/product";

import styles from './product.module.scss'

type Props = {
    params: Promise<{
        slug: string
    }>
}

export default async function Product({ params }: Props) {
    const slug = (await params).slug
    const prod = await ProductImp.findBySlug(slug)

    return (
        <div className={
            styles['product-section'] +
            ' ' + styles['product-section--relative']}
        >
            <section className={styles["product-images"]}>
                {
                    prod?.attributes?.medias.map((i, idx) =>
                        <div key={idx} className={styles['image']}>
                            <Image
                                src={i?.url ?? ''}
                                alt={prod.name ?? ''} width={400} height={400}
                                priority
                            />
                        </div>
                    )
                }
            </section >
            <section className={
                styles['product-infors'] +
                ' ' + styles['product-section--sticky']}
            >
                <DivTest>
                    Thông tin <br />sản phẩm
                </DivTest>
            </section >
        </div >
    )
}



function DivTest({ children }: PropsWithChildren) {
    return (
        <div className="flex items-center justify-center text-center
            text-xl/8 md:text-4xl/16 font-bold uppercase 
            border-[10px] border-amber-500 
            h-screen">
            {children}
        </div>
    )
}
