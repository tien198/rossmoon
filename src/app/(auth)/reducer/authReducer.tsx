// zod errorTree
export type Invalid = {
    errors: string[]
}

// state may be value of field or error tree when validating
type State = {
    isSubmitted?: boolean
    email: string
    password: string
    passwordConfirm?: string
}

export type FieldName = keyof State

export type InvalidFieldName = 'emailInvalid' | 'passwordInvalid'

type Action = {
    type: 'setField',
    field: FieldName
    val?: string | boolean
}

export const state: State = {
    email: '',
    password: '',
    // passwordConfirm: ''
}

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'setField':
            return {
                ...state,
                [action.field]: action.val,
            }
        default:
            return state
    }
}