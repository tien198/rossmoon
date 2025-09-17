import MagazineFeatureImp from "@/models/magazineFeature"
import Feature from "./comps/feature"

type Props = {
    params: Promise<{
        ['collection-slug']: string
    }>
}

export default async function New({ params }: Props) {
    const collectionSlug = (await params)['collection-slug']

    const features = await MagazineFeatureImp.findByCollectionSlug(collectionSlug)

    return (
        <div className="grid grid:col-2 md:grid-cols-4">
            {features.map(fea =>
                <Feature {...fea} key={fea._id?.toString()} />
            )}
        </div>
    )
}