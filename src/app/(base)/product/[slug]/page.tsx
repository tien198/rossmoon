import type { _Product } from "@/client/type/product";

import ProductServiceImp from "@/server/service/productService.imp";
import ProductRespoImp from "@/server/respository/productRespo.imp";
import ProductDTO from "@/DTO/product";

import ProductImages from "./comp/productImages";
import ProductImp from "@/server/model/product";
import styles from './product.module.scss'

type Props = {
    params: Promise<{
        slug: string
    }>
}

export const revalidate = false

export default async function ProductPage({ params }: Props) {
    const slug = (await params).slug

    const prodSevice = new ProductServiceImp(new ProductRespoImp(new ProductImp()))
    const prod = await prodSevice.productRespo.findBySlug(slug)
    const prodDTO = new ProductDTO(prod) as _Product

    return (
        <div className={
            styles['product-detail'] +
            ' ' + styles['product-detail--relative']}
        >
            <section className={styles["product-images"]}>
                <ProductImages prod={prodDTO} />
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


