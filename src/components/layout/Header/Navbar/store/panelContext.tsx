'use client'

import { createContext, useReducer, type PropsWithChildren } from "react";
import type { Action, ContextProps, State } from "./type";





function panelReducer(state: State, action: Action): State {
    const { payload } = action
    if (action.type === 'setActIdx') {
        return {
            ...state,
            actIdx: payload !== state.actIdx ? payload : null
        }
    }
    else if (action.type === 'setSelectedIdx') {
        return {
            ...state,
            selectedIdx: payload !== state.selectedIdx ? payload : null
        }
    }
    return state
}

const initialState: State = { actIdx: null, selectedIdx: null }

export const ListPanelContext = createContext<ContextProps>({
    state: initialState,
    setActIndex() { },
    setSelectedIndex() { }
})



export default function ListPanelProvider({ children }: PropsWithChildren) {
    // const [actIdx, setActIdx] = useState<number | null>(null)
    const [state, dispatch] = useReducer(panelReducer, initialState)

    const setActIndex = (index: number) => dispatch({
        type: 'setActIdx',
        payload: index
    })

    const setSelectedIndex = (index: number) => dispatch({
        type: 'setSelectedIdx',
        payload: index
    })

    const contextValue = {
        state, setActIndex, setSelectedIndex
    }

    return (
        <ListPanelContext.Provider value={contextValue}>
            {children}
        </ListPanelContext.Provider>
    )
}