'use client'

import type { ProductMediaData } from '@/shared/type/product.properties';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Media from './Media';


type Props = {
    medias?: (ProductMediaData | null | undefined)[]
    prodName?: string
    disabled?: boolean
}

export default function MediaGallery({ medias, prodName, disabled }: Props) {
    const [selected, setSelected] = useState<ProductMediaData | null>(medias?.[0] as any);
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        return () => setSelected(null)
    }, [medias])

    return (
        <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
                {selected?.type === 'image' ? (
                    <Image
                        src={selected.url}
                        alt={prodName ?? ''}
                        className="w-full h-auto object-cover"
                        width={550}
                        height={550}
                        priority
                    />
                ) : (
                    <video controls className="w-full rounded-lg">
                        <source src={selected?.url} type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video.
                    </video>
                )}
            </div>

            <div className="flex flex-wrap gap-3 overflow-x-auto">
                {medias?.map((m, i) => (
                    <Media
                        key={i}
                        id={i}
                        media={m}
                        alt={prodName ?? ''}
                        handleSelected={() => {
                            setSelected(m ?? null)
                            setSelectedIndex(i)
                        }}
                        isSelected={selectedIndex === i}
                        disabled={disabled}
                    />
                ))}
                {
                    !disabled &&
                    <button type='button' className='border rounded-md overflow-hidden w-20 h-20 flex-shrink-0 hover:opacity-80 transition'>
                        +
                    </button>
                }
            </div>
        </div>
    );
};