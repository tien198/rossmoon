import { PropsWithChildren } from "react";
import Image from "next/image";
import ProductImp from "@/models/product";

import styles from './product.module.scss'
import ProductImages from "./comps/productImages";
import { ProductPart } from "@/models/product.zod";

type Props = {
    params: Promise<{
        slug: string
    }>
}

export default async function Product({ params }: Props) {
    const slug = (await params).slug
    const prod = await ProductImp.findBySlug(slug) as ProductPart

    return (
        <div className={
            styles['product-detail'] +
            ' ' + styles['product-detail--relative']}
        >
            <section className={styles["product-images"]}>
                <ProductImages prod={prod} />
            </section >
            <section className={
                styles['product-infors'] +
                ' ' + styles['product-detail--sticky']}
            >
                <div>
                    <div>[mã sản phẩm]: vd : MD007</div>
                    <h1>{prod.name}</h1>
                    <p className="text-sm">{prod.price?.toLocaleString()} <sup>đ</sup></p>
                    <a href="http://lonk.kd" target="_blank" rel="noopener noreferrer"
                        className={styles['cta-btn']}>
                        Liên hệ với Chuyên viên tư vấn
                    </a>
                    <div className="text-sm">
                        <p>{prod.description}</p>
                        <p>{prod.features}</p>
                    </div>
                </div>
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
