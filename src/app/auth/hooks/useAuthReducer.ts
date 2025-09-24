import { ChangeEventHandler, useReducer } from "react";
import { reducer, state } from "./authReducer";

export function useAuthReducer() {
    const [authState, dispatch] = useReducer(reducer, state)

    const changeEmail: ChangeEventHandler<HTMLInputElement> =
        e => dispatch({ type: 'setEmail', payload: e.target.value })

    const changePassword: ChangeEventHandler<HTMLInputElement> =
        e => dispatch({ type: 'setPassword', payload: e.target.value })

    return { authState, changeEmail, changePassword }

}