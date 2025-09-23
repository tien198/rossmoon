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
            styles['product-section'] +
            ' ' + styles['product-section--relative']}
        >
            <section className={styles["product-images"]}>
                <ProductImages prod={prod} />
            </section >
            <section className={
                styles['product-infors'] +
                ' ' + styles['product-section--sticky']}
            >
                <div className="p-4 md:p-8 leading-8">
                    <div>[mã sản phẩm]: vd : MD007</div>
                    <h1 className="text-lg tracking-tight leading-8">{prod.name}</h1>
                    <p className="text-sm">{prod.price?.toLocaleString()} <sup>đ</sup></p>
                    <a href="http://lonk.kd" target="_blank" rel="noopener noreferrer"
                        className="mt-4 mb-10 bg-black text-white border border-black rounded-4xl p-3 text-center block
                        hover:bg-white hover:text-black transition-colors">
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
