import CollectionImp from "@/models/collection"
import { collectionsCollection } from "@/services/mongoDbCollections"

type Props = {
    params: {
        ['collection-slug']: string
    }
}

export default async function New({ params }: Props) {
    const pars = await params

    const col = await CollectionImp.findOne({ slug: pars['collection-slug'] })

    const docs = collectionsCollection.aggregate([
        {
            $match: { slug: pars['collection-slug'] }
        },
        {
            $lookup: {
                from: 'magazineFeatures',
                localField: '_id',
                foreignField: 'collectionId',
                as: 'magazineFeatures'
            }
        }
    ])
    console.log(docs);
    

    // console.log(await CollectionImp.findFeatures(pars['collection-slug']));

    const sub = col?.subCollections

    return <>
        <div className="grid grid-cols-4">
            <div className="h-20 bg-amber-500">{sub?.[0]?.toString()}</div>
            <div className="h-20 bg-amber-400">{sub?.[1]?.toString()}</div>
            <div className="h-20 bg-amber-300">{sub?.[2]?.toString()}</div>
            <div className="h-20 bg-amber-200">{sub?.[3]?.toString()}</div>
        </div>
    </>
}