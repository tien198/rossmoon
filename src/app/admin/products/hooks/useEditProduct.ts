import { getProduct } from "@/api/products"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { useActionState, useRef } from "react"
import { editProductAction } from "../edit/[id]/_action"

export default function useEditProduct() {
    const params = useParams()
    const prodId = params['id'] as string

    const productQuery = useQuery({
        queryKey: ['products', prodId],
        queryFn: () => getProduct(prodId)
    })

    const [actionState, formAction] = useActionState(editProductAction, {})

    const formRef = useRef<HTMLFormElement>(null)

    function handleSubmit() {
        const formData = new FormData(formRef.current!)
        formAction(formData)
    }

    return {
        productQuery,
        actionState, formAction,
        formRef, handleSubmit
    }
}