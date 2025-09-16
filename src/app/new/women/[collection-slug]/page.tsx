import MagazineFeatureImp from "@/models/magazineFeature"
import Image from "next/image"

type Props = {
    params: {
        ['collection-slug']: string
    }
}

export default async function New({ params }: Props) {
    const collectionSlug = (await params)['collection-slug']

    const features = await MagazineFeatureImp.findByCollectionSlug(collectionSlug)

    return (
        <div >
            {features.map(fea =>
                <div key={fea._id?.toString()} className="grid grid-cols-4">
                    {fea.bannerImage && <div className="col-span-2 row-span-2"><Image src={fea.bannerImage.desktopUrl!} alt={(fea.title ?? fea.products?.[0]?.name) || 'alt'} height={300} width={300} /></div>}
                    {fea.products?.map((prod, idx) =>
                        <>
                            {idx === 0 && <div key={prod._id?.toString()} className="bg-amber-500">{prod.name}</div>}
                            {idx === 1 && <div key={prod._id?.toString()} className="bg-amber-400">{prod.name}</div>}
                            {idx === 2 && <div key={prod._id?.toString()} className="bg-amber-300">{prod.name}</div>}
                            {idx === 3 && <div key={prod._id?.toString()} className="bg-amber-200">{prod.name}</div>}
                            {idx > 3 && <div key={prod._id?.toString()} className="h-20 bg-amber-200">{prod.name}</div>}
                        </>
                    )}
                </div>
            )}
        </div>
    )
}