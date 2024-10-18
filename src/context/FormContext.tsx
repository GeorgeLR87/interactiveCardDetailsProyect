import { createContext, Dispatch, ReactNode, SetStateAction, useReducer, useState } from "react";
import { FormActions, formReducer, initialState } from "../reducers/form-reducer";
import { FormData, FormErrors } from "../types/FormData";

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
}

export const FormContext = createContext<FormContextProps>( {} as FormContextProps )

export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = useReducer(formReducer, initialState, () => {
        const savedState = localStorage.getItem("formData")
        return savedState ? JSON.parse(savedState) : initialState
    })

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <FormContext.Provider value={{
            state,
            dispatch,
            errors,
            setErrors,
            isSubmitted,
            setIsSubmitted  
        }}>
            {children}
        </FormContext.Provider>
    )

}