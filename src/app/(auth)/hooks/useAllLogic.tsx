'use client'

import { useAuthReducer } from "./useAuthReducer";
import { loginAction } from "../_actions";
import z from "zod";
import { FieldName, Invalid } from "../reducer/authReducer";
import { loginSchema } from "@/schemas/client/user.zod";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";




export default function useAllLogic() {
    const { authState, changeField, setField } = useAuthReducer()

    const [actionState, formAction, isPending] = useActionState(loginAction, {})

    const router = useRouter()

    const invalidMsgs: Record<string, Invalid | undefined> = {
        email: undefined, password: undefined
    }

    const parser = loginSchema.safeParse(authState)
    if (!parser.success) {
        const errorTree = z.treeifyError(parser.error)
        const errorProperties = errorTree.properties
        for (const key in errorProperties) {
            const k = key as keyof typeof errorProperties
            if (Object.hasOwn(errorProperties, k)) {
                invalidMsgs[k] = errorProperties[k];
            }
        }
    }

    useEffect(() => {
        if (!actionState.token)
            return

        // if action return token => login success . save token & redirect
        const token = actionState.token as string
        localStorage.setItem('jwtToken', token.split(' ')[1])
        router.push('/')
    }, [actionState.token, router])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setField('isSubmitted', true)

        if (Object.keys(invalidMsgs).some(key => invalidMsgs[key as FieldName]))
            return
        formAction(new FormData(e.currentTarget))
    }

    return {
        authState, changeField, invalidMsgs,
        actionState, formAction, isPending,
        handleSubmit
    }
}