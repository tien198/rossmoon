import type { ProductMedia } from "@/schemas/base/product.properties.zod";
import Image from "next/image";
import { MouseEventHandler, useRef } from "react";

type Props = {
    idx: number
    media?: ProductMedia | null
    alt: string
    handleSelected: MouseEventHandler
    isSelected: boolean
}

export default function Media({ idx, media, alt, handleSelected, isSelected }: Props) {
    const fileRef = useRef<HTMLInputElement>(null)

    function handleImageChange() {
        fileRef.current?.click()
    }
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
        <div
            onClick={handleImageChange}
            className="text-center text-sm"
        >
            Đổi ảnh
        </div>
        <input
            ref={fileRef}
            type="file"
            name={`medias[${idx}]`}
            hidden
        />
    </div>
}