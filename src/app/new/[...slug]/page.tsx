type Props = {
    params: {
        slug: string[]
    }
}

export default async function New({ params }: Props) {
    /*
        ['category', 'collection', '_', 'collection-id' ]
    */
    const [category, collection, _, collectionId] = await params.slug

    return <>
        <div className="flex flex-col">
            <h1>{category}</h1>
            <h1>{collection}</h1>
            <h1>{_}</h1>
            <h1>{collectionId}</h1>
        </div>
    </>
}