'use client'

import { getProducts } from "@/lib/api/products";
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
            if (currentScrollTop > lastScrollTop.current) {

                const inEgde = container.scrollHeight - container.scrollTop <= container.clientHeight
                if (!inEgde)
                    return
                // consider the last page hasNext
                if ((prodsQuery.data?.pages?.[prodsQuery.data?.pages?.length - 1].hasNext) === false)
                    return
                const searchs = new URLSearchParams(location.search)
                pageNumber.current = Number(searchs.get('page')) + 1
                prodsQuery.fetchNextPage()
            }

            // scroll up
            else if (currentScrollTop === 0) {
                // consider the first page hasPrevious
                if ((prodsQuery.data?.pages?.[0].hasPrevious) === false)
                    return
                const searchs = new URLSearchParams(location.search)
                pageNumber.current = Number(searchs.get('page')) - 1
                if (pageNumber.current <= 0)
                    pageNumber.current = 0
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
        prodsTable, prodsQuery,
        pageNumber
    }
}