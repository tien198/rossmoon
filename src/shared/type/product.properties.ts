export interface ProductAttributes {
    width?: number | null;
    height?: number | null;
    depth?: number | null;
    color?: string | null;
    material?: string | null;
}



export type ProductMediaData = {
    type: 'image' | 'video',
    url: string
}



export type ProductMedia =
    | ProductMediaData
    | File;



export type ProductMediasArray = (ProductMedia | null | undefined)[]



export type ProductAdditionalInfors = {
    features?: string[] | null;
    origin?: string | null;
    notice?: string | null;
    sustainability?: string | null;
    productCare?: string | null;
};