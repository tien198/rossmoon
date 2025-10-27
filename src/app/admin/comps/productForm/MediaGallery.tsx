'use client'

import { ProductMedia } from '@/schemas/base/product.properties.zod';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import MediaComp from './Media';


type Props = {
    medias?: (ProductMedia | null | undefined)[]
    prodName?: string
}

export default function MediaGallery({ medias, prodName }: Props) {
    const [selected, setSelected] = useState<ProductMedia | null>(medias?.[0] as any);
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        return () => setSelected(null)
    }, [medias])

    return (
        <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
                {selected?.type === 'image' ? (
                    <Image src={selected.url} alt={prodName ?? ''} className="w-full h-auto object-cover" width={550} height={550} />
                ) : (
                    <video controls className="w-full rounded-lg">
                        <source src={selected?.url} type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video.
                    </video>
                )}
            </div>

            <div className="flex gap-3 overflow-x-auto">
                {medias?.map((m, i) => (
                    <MediaComp
                        key={i}
                        media={m}
                        alt={prodName ?? ''}
                        handleSelected={() => {
                            setSelected(m ?? null)
                            setSelectedIndex(i)
                        }}
                        isSelected={selectedIndex === i}
                    />
                ))}
            </div>
        </div>
    );
};