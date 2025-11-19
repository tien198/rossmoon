export interface ProductAttributes {
    width?: number;
    height?: number;
    depth?: number;
    color?: string;
    material?: string;
}



export type MediaData = {
    type: 'image' | 'video',
    url: string
}



export type ProductMedia =
    MediaData | File;



export type ProductMediasArray = (ProductMedia | undefined)[]



export type ProductAdditionalInfors = {
    features?: string[];
    origin?: string;
    notice?: string;
    sustainability?: string;
    productCare?: string;
};