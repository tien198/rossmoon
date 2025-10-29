import { getProduct } from "@/lib/api/products"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { FormEvent, useActionState, useRef } from "react"
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
        formAction(formData)
    }

    return {
        productQuery,
        actionState, formAction,
        formRef, handleSubmit
    }
}