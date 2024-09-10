import { FormData } from "../types"

export type FormActions =
    { type: 'set-cardholder-name', payload: { cardholderName: FormData['cardholderName'] } } |
    { type: 'set-card-number', payload: { cardNumber: FormData['cardNumber'] } } |
    { type: 'set-exp-month', payload: { expMonth: FormData['expMonth'] } } |
    { type: 'set-exp-year', payload: { expYear: FormData['expYear'] } } |
    { type: 'set-cvc', payload: { cvc: FormData['cvc'] } }

export const initialState: FormData = {
    cardholderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
}

export const formReducer = (
    state: FormData = initialState,
    action: FormActions
) => {

    if(action.type === 'set-cardholder-name') {
        return {
            ...state,
            cardholderName: action.payload.cardholderName
        }
    }

    if(action.type === 'set-card-number') {
        return {
            ...state,
            cardNumber: action.payload.cardNumber
        }
    }

    if(action.type === 'set-exp-month') {
        return {
            ...state,
            expMonth: action.payload.expMonth
        }
    }

    if(action.type === 'set-exp-year') {
        return {
            ...state,
            expYear: action.payload.expYear
        }
    }

    if(action.type === 'set-cvc') {
        return {
            ...state,
            cvc: action.payload.cvc
        }
    }

    return state
}