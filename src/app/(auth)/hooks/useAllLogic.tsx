'use client'

import { useAuthReducer } from "./useAuthReducer";
import { loginAction } from "../_actions";
import z from "zod";
import { FieldName, Invalid } from "../reducer/authReducer";
import { loginSchema } from "@/schemas/client/user.zod";
import { useFormState } from "react-dom";




export default function useAllLogic() {
    const { authState, changeField, setField } = useAuthReducer()

    const [actionState, formAction] = useFormState(loginAction, {})

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

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setField('isSubmitted', true)
        console.log(Object.keys(invalidMsgs).some(key => invalidMsgs[key as FieldName]));

        if (Object.keys(invalidMsgs).some(key => invalidMsgs[key as FieldName]))
            return

        e.currentTarget.submit()
    }

    return {
        authState, changeField, invalidMsgs,
        actionState, formAction,
        handleSubmit
    }
}