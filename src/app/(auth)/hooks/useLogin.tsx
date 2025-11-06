'use client'

import { useActionState, useEffect } from "react"
import { useAuthReducer } from "./useAuthReducer"
import { loginAction } from "../_actions"
import { loginSchema } from "@/shared/schema/base/user.zod"
import { zodValidation } from "@/shared/zod.Validate"
import { useRouter } from "next/navigation"
import { FieldName } from "../reducer/authReducer"




export default function useLogin() {
    const { authState, changeField, setField } = useAuthReducer()

    const [actionState, formAction, isPending] = useActionState(loginAction, {})

    const router = useRouter()
    const invalid = zodValidation(authState, loginSchema)

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

        if (Object.keys(invalid).some(key => invalid[key as FieldName]))
            return
        formAction(new FormData(e.currentTarget))
    }

    return {
        authState, changeField, invalid,
        actionState, formAction, isPending,
        handleSubmit
    }
}