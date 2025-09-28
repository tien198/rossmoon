
import { ChangeEvent, useReducer } from "react";
import { FieldName, reducer, state } from "../reducer/authReducer";

export function useAuthReducer() {
    const [authState, dispatch] = useReducer(reducer, state)

    const changeField = (fieldName: FieldName) =>
        (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: 'setField', field: fieldName, val: e.target.value })

    const setField = (field: FieldName, val?: string | boolean) =>
        dispatch({ type: 'setField', field, val })

    return { authState, changeField, setField }
}
/*
export function useInvalidReducer() {
    const [invalidAuth, dispatch] = useReducer(reducer, state)
    const setInvalid = (field: FieldName, val?: string | Invalid) =>
        dispatch({ type: 'setField', field, val })
    return { invalidAuth, setInvalid }
}
    */