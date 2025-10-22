'use client'

import { Media } from '@/schemas/base/product.properties.zod';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


type Props = {
    medias?: (Media | null | undefined)[]
    prodName?: string
}

export default function MediaGallery({ medias, prodName }: Props) {
    const [selected, setSelected] = useState<Media | null>(medias?.[0] as any);

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
                    <button
                        key={i}
                        onClick={() => m && setSelected(m)}
                        className={`border rounded-md overflow-hidden w-20 h-20 flex-shrink-0 hover:opacity-80 transition ${selected?.url === m?.url ? 'border-black' : 'border-gray-200'
                            }`}
                    >
                        {m?.type === 'image' ? (
                            <Image src={m.url} alt={prodName ?? ''} className="object-cover w-full h-full" width={550} height={550}/>
                        ) : (
                            <video className="object-cover w-full h-full">
                                <source src={m?.url} type="video/mp4" />
                            </video>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};


