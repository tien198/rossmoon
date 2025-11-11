'use client'

import { getProducts } from "@/client/lib/api/productAPI";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function useProducts() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showAddModal = () => { }
    const showDeleteModal = (id: string) => { }


    // ---------------------------------------------------------------------
    const searchParams = useSearchParams()
    const pageNumber = useRef(Number(searchParams.get('page')))

    const prodsQuery = useInfiniteQuery({
        queryKey: ['products', 'infinite'],
        initialPageParam: pageNumber.current,
        queryFn: ({ pageParam }) => getProducts(pageParam),
        getNextPageParam:
            (last, all, lastPageParam) =>
                last.hasNext
                    ? ++lastPageParam
                    : undefined,
        getPreviousPageParam:
            (last, all, lastPageParam) =>
                last.hasPrevious
                    ? --lastPageParam
                    : undefined
    })


    const prodsTable = useRef<HTMLTableSectionElement>(null)
    const lastScrollTop = useRef(0)

    useEffect(() => {
        const container = prodsTable.current!

        const scrollEvt = (e: Event) => {
            const currentScrollTop = container.scrollTop

            if (prodsQuery.isFetching)
                return

            // scroll down 
            else if (currentScrollTop > lastScrollTop.current) {

                const inEgde = container.scrollHeight - container.scrollTop <= container.clientHeight
                if (!inEgde)
                    return
                // consider the last page hasNext
                if ((prodsQuery.data?.pages?.[prodsQuery.data?.pages?.length - 1].hasNext) === false)
                    return
                prodsQuery.fetchNextPage()
            }

            // scroll up
            else if (currentScrollTop === 0) {
                // consider the first page hasPrevious
                if ((prodsQuery.data?.pages?.[0].hasPrevious) === false)
                    return
                prodsQuery.fetchPreviousPage()
            }

            container!.removeEventListener('scroll', scrollEvt)
            lastScrollTop.current = currentScrollTop

            if (
                prodsQuery.data?.pages?.[0].hasPrevious
                || prodsQuery.data?.pages?.[prodsQuery.data?.pages.length - 1].hasNext
            )
                e.currentTarget!.addEventListener('scroll', scrollEvt)
        }
        container.removeEventListener('scroll', scrollEvt)
        container.addEventListener('scroll', scrollEvt)
    }, [prodsTable])



    return {
        showAddModal, showDeleteModal,
        prodsTable, prodsQuery
    }
}