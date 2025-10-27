import type { ProductMedia } from "@/schemas/base/product.properties.zod";
import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
    media?: ProductMedia | null
    alt: string
    handleSelected: MouseEventHandler
    isSelected: boolean
}

export default function Media({ media, alt, handleSelected, isSelected }: Props) {
    return <div>
        <button type="button"
            onClick={handleSelected}
            className={
                'border rounded-md overflow-hidden w-20 h-20 flex-shrink-0 hover:opacity-80 transition'
                + ' ' + (isSelected ? 'border-black' : 'border-gray-300')
            }
        >
            {media?.type === 'image' ? (
                <Image src={media.url} alt={alt ?? ''} className="object-cover w-full h-full" width={550} height={550} />
            ) : (
                <video className="object-cover w-full h-full">
                    <source src={media?.url} type="video/mp4" />
                </video>
            )}
        </button>
        <input type="file" name="" id="" hidden />
    </div>
}