import { EFormData } from "../enums/Form"
import { FormData, FormErrors } from "../types/FormData"

export const formatCardNumber = (cardNumber: string) => {
    const limited = cardNumber.slice(0, 19)
    const formatted = limited.replace(/(\d{4})(?=\d)/g, '$1 ')
    return formatted
}

export const formatMonth = (month: string): string => {
    const numMonth = Number(month)
    if (isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
        return ''
    }
    return numMonth < 10 ? `0${numMonth}` : `${numMonth}`
}

export const formatYear = (year: string): string => {
    const numYear = Number(year)
    if (isNaN(numYear) || numYear < 0 || numYear > 99) {
        return ''
    }
    return numYear < 10 ? `0${numYear}` : `${numYear}`
}

export const formatCVC = (cvc: string): string => {
    const cleanedCVC = cvc.replace(/\D+/g, '')
    return cleanedCVC.slice(0, 3);
}

export const validateForm = (state: FormData): FormErrors => {
    
    const errors: FormErrors = {}

    if (!state[EFormData.CardholderName]) {
        errors[EFormData.CardholderName] = "Can't be blank";
    }
    if (!state[EFormData.CardNumber]) {
        errors[EFormData.CardNumber] = "Can't be blank";
    } else if (/[a-zA-Z]/.test(state[EFormData.CardNumber])) {
        errors[EFormData.CardNumber] = "Wrong format, numbers only";
    } else if (!/^\d{16}$/.test(state[EFormData.CardNumber].replace(/\s/g, ''))) {
        errors[EFormData.CardNumber] = "Must be 16 digits";
    }
    if (!state[EFormData.ExpMonth]) {
        errors[EFormData.ExpMonth] = "Can't be blank";
    }
    if (!state[EFormData.ExpYear]) {
        errors[EFormData.ExpYear] = "Can't be blank";
    }
    if (!state[EFormData.CVC]) {
        errors[EFormData.CVC] = "Can't be blank";
    }
    return errors
}

