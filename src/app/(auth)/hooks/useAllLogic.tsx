'use client'

import { useAuthReducer } from "./useAuthReducer";
import { loginAction } from "../_actions";
import z from "zod";
import { FieldName, Invalid } from "../reducer/authReducer";
import { useActionState } from "react";
import { loginSchema } from "@/schemas/client/user.zod";




export default function useAllLogic() {
    const { authState, changeField, setField } = useAuthReducer()

    const [actionState, formAction] = useActionState(loginAction, {})

    const invalidMsgs: Record<FieldName, Invalid | undefined> = {
        email: undefined, password: undefined, isSubmitted: undefined
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

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setField('isSubmitted', true)

        console.log('---------\n------------\nsubmited')

        // formAction(new FormData(e.currentTarget))
    }

    return {
        authState, changeField, invalidMsgs,
        actionState, formAction,
        handleSubmit
    }

}