type State = {
    email: string
    password: string
}

type Action = {
    type: 'setEmail' | 'setPassword',
    payload: string
}


export const state: State = {
    email: '',
    password: ''
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'setEmail':
            return {
                ...state, email: action.payload
            }
        case 'setPassword': {
            return {
                ...state, password: action.payload
            }
        }
        default:
            return {
                ...state
            }
    }
}