import type { ProductMedia } from '@/shared/schema/base/product.properties.zod';
import Image from 'next/image';
import { MouseEventHandler, useRef } from 'react';

type Props = {
    id: number
    media?: ProductMedia | null
    alt: string
    handleSelected: MouseEventHandler
    isSelected: boolean
    disabled?: boolean
}

export default function Media({ id, media, alt, handleSelected, isSelected, disabled }: Props) {
    const fileRef = useRef<HTMLInputElement>(null)

    function handleImageChange() {
        fileRef.current?.click()
    }
    return <div>
        <button type='button'
            onClick={handleSelected}
            className={
                'border rounded-md overflow-hidden w-20 h-20 flex-shrink-0 hover:opacity-80 transition'
                + ' ' + (isSelected ? 'border-black' : 'border-gray-300')
            }
        >
            {media?.type === 'image' ? (
                <Image
                    src={media.url}
                    alt={alt ?? ''}
                    className='object-cover w-full h-full'
                    width={550} height={550}
                    priority
                />
            ) : (
                <video className='object-cover w-full h-full'>
                    <source src={media?.url} type='video/mp4' />
                </video>
            )}
        </button>
        <button type='button'
            onClick={handleImageChange}
            className='block w-full text-center text-sm'
            hidden={disabled}
        >
            Đổi ảnh
        </button>
        <input
            ref={fileRef}
            type='file'
            name={`medias[${id}]`}
            hidden
        />
    </div>
}