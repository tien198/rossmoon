export type State = {
    actIdx: number | null
    selectedIdx: number | null
}

export type Action = {
    type: 'setActIdx' | 'setSelectedIdx',
    payload: number
}

export type ContextProps = {
    state: State
    setActIndex: (id: number) => void
    setSelectedIndex: (id: number) => void
}