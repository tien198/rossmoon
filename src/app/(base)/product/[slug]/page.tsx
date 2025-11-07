import type { Product } from "@/shared/schema/client/product.zod";
import ProductRespo from "@/respository/ProductRespoImp";

import styles from './product.module.scss'
import ProductImages from "./comp/productImages";

type Props = {
    params: Promise<{
        slug: string
    }>
}

export const revalidate = false

export default async function Product({ params }: Props) {
    const slug = (await params).slug
    const prod = await ProductRespo.findBySlug(slug) as Partial<Product>

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
                    <h1>{prod.name ?? ''}</h1>
                    <p className="text-sm">{prod.price?.toLocaleString()} <sup>đ</sup></p>
                    <a className={styles['cta-btn']}
                        href="http://lonk.kd" target="_blank" rel="noopener noreferrer"
                    >
                        Liên hệ với Chuyên viên tư vấn
                    </a>
                    <div className={styles['description']}>
                        <p>{prod.description}</p>
                        <p>{prod.additionalInfors?.features}</p>
                    </div>
                </div>
            </section >
        </div >
    )
}


