'use client'

import { AppStore, makeStore } from "@/lib/store"
import { PropsWithChildren, useRef } from "react"
import { Provider } from "react-redux"

export default function ReduxProvider({ children }: PropsWithChildren) {
    const storeRef = useRef<AppStore>(undefined)

    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(
            ///
            {}
        )
    }

    return <Provider store={storeRef.current}>
        {children}
    </Provider>
}
