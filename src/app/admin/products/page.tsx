import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import ProductTable from "./comps/productTable"
import { getProducts } from "@/lib/api/products"

type Props = {
    searchParams: Promise<{
        page: string
    }>
}

export default async function ProductPage({ searchParams }: Props) {
    const page = Number((await searchParams).page) || 0

    const queryClient = new QueryClient()
    await queryClient.fetchQuery({
        queryKey: ['products'],
        queryFn: getProducts.bind(null, page)
    })

    return <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductTable />
    </HydrationBoundary>
}