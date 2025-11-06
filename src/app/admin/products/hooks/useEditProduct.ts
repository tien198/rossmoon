import { getProduct } from "@/lib/api/productAPI"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { FormEvent, startTransition, useActionState, useRef } from "react"
import { editProductAction } from "../edit/[id]/_action"

export default function useEditProduct() {
    const params = useParams()
    const prodId = params['id'] as string

    const productQuery = useQuery({
        queryKey: ['products', prodId],
        queryFn: () => getProduct(prodId)
    })

    const actionWithParams = editProductAction.bind(null, prodId)
    const [actionState, formAction] = useActionState(actionWithParams, {})

    const formRef = useRef<HTMLFormElement>(null)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const formData = new FormData(formRef.current!)
        const propertiesArr = Array.from(formData.entries())

        for (const [k, val] of propertiesArr) {
            if (k.startsWith('medias')) {
                const i = Number(
                    k.split('[')[1].split(']')[0]
                )
                if ((val as File).size === 0) {
                    formData.set(k + '.type', productQuery.data?.medias?.[i]?.type ?? '')
                    formData.set(k + '.url', productQuery.data?.medias?.[i]?.url ?? '')

                    formData.delete(k)
                }
            }
        }

        startTransition(() =>
            formAction(formData)
        )
    }

    return {
        productQuery,
        actionState, formAction,
        formRef, handleSubmit
    }
}