import { ChangeEvent, createContext, Dispatch, ReactNode, SetStateAction, useReducer, useState } from "react";
import { FormActions, formReducer, initialState } from "../reducers/form-reducer";
import { FormData, FormErrors } from "../types/FormData";
import { formatCardNumber, formatCVC, formatMonth, formatYear, validateForm } from "../helpers/helpers";
import { EFormaActions, EFormData } from "../enums/Form";

type FormProviderProps = {
    children: ReactNode
}

type FormContextProps = {
    state: FormData
    dispatch: Dispatch<FormActions>
    errors: FormErrors
    setErrors: Dispatch<SetStateAction<FormErrors>>
    isSubmitted: boolean
    setIsSubmitted: Dispatch<SetStateAction<boolean>>
    handleChangeExpMonth: (e: ChangeEvent<HTMLInputElement>) => void
    handleChangeExpYear: (e: ChangeEvent<HTMLInputElement>) => void
    handleChangeCardHolderName: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>) => void
    handleChangeCardHolderNumber: (e: ChangeEvent<HTMLInputElement>) => void
    handleChangeCVC: (e: ChangeEvent<HTMLInputElement>) => void
    handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void
    handleClickCardSuccess: () => void
}

export const FormContext = createContext<FormContextProps>({} as FormContextProps)

export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = useReducer(formReducer, initialState, () => {
        const savedState = localStorage.getItem("formData")
        return savedState ? JSON.parse(savedState) : initialState
    })

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChangeExpMonth = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedMonth = formatMonth(e.target.value)
        dispatch({
            type: EFormaActions.SetExpMonth,
            payload: { expMonth: formattedMonth as EFormData.ExpMonth },
        })
    }

    const handleChangeExpYear = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedYear = formatYear(e.target.value);
        dispatch({
            type: EFormaActions.SetExpYear,
            payload: { expYear: formattedYear as EFormData.ExpYear },
        })
    }

    const handleChangeCardHolderName = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>,
    ) => {
        dispatch({
            type: EFormaActions.SetCardholderName,
            payload: { cardholderName: e.target.value as EFormData.CardholderName },
        })
    }

    const handleChangeCardHolderNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedCardNumber = formatCardNumber(e.target.value);
        dispatch({
            type: EFormaActions.SetCardNumber,
            payload: { cardNumber: formattedCardNumber as EFormData.CardNumber },
        })
    }

    const handleChangeCVC = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedCVC = formatCVC(e.target.value);
        dispatch({
            type: EFormaActions.SetCVC,
            payload: { cvc: formattedCVC as EFormData.CVC },
        })
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newErrors = validateForm(state)
        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitted(true)
        }
    }

    const handleClickCardSuccess = () => {
        dispatch({ type: EFormaActions.ResetForm })
        setIsSubmitted(false);
    }

    return (
        <FormContext.Provider value={{
            state,
            dispatch,
            errors,
            setErrors,
            isSubmitted,
            setIsSubmitted,
            handleChangeExpMonth,
            handleChangeExpYear,
            handleChangeCardHolderName,
            handleChangeCardHolderNumber,
            handleChangeCVC,
            handleSubmitForm,
            handleClickCardSuccess
        }}>
            {children}
        </FormContext.Provider>
    )

}