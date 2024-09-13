import { Dispatch, MouseEvent } from "react"
import { FormActions } from "../../reducers/form-reducer"
import { FormData } from "../../types"
import { EFormData } from "../../enums/Form"
import CardHolderNameInput from "./components/CardHolderNameInput"
import CardNumberInput from "./components/CardNumberInput"
import CVCInput from "./components/CVCInput"
import Dates from "../Dates/Dates"

type FormProps = {
    state: FormData
    dispatch: Dispatch<FormActions>
}

const Form = ({ state, dispatch }: FormProps) => {
    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('Form submitted!',)

    }
    return (
        <section className="flex flex-col justify-center items-center mx-2 md:mt-14 lg:mt-0">
            <div className="w-full max-w-sm">
                <CardHolderNameInput state={state.cardholderName} dispatch={dispatch} />
                <CardNumberInput state={state.cardNumber} dispatch={dispatch} />

                <div className="flex flex-row justify-between gap-4 w-full">
                    <Dates
                        state={{
                            expMonth: state[EFormData.ExpMonth],
                            expYear: state[EFormData.ExpYear]
                        }}
                        dispatch={dispatch} />
                    <CVCInput state={state.cvc} dispatch={dispatch} />
                </div>

                <button
                    className="w-full mt-6 bg-very-dark-violet text-white py-3 rounded-lg text--base hover:bg-dark-grayish-violet transition duration-200"
                    onClick={handleSubmit}
                >
                    Confirm
                </button>

            </div>
        </section>
    )
}

export default Form
