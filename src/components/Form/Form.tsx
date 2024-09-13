import { Dispatch, MouseEvent } from "react"
import { FormActions } from "../../reducers/form-reducer"
import { FormData } from "../../types"
import CardHolderNameInput from "./components/CardHolderNameInput"
import CardNumberInput from "./components/CardNumberInput"
import ExpMonthInput from "./components/ExpMonthInput"
import ExpYearInput from "./components/ExpYearInput"
import CVCInput from "./components/CVCInput"


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
                    <div className="mb-4">
                        <label
                            htmlFor="expMonth"
                            className="block uppercase text-sm text-very-dark-violet mb-1"
                        >
                            Exp. Date (MM/YY)
                        </label>
                        <div className="flex flex-row gap-2">

                            <ExpMonthInput state={state.expMonth} dispatch={dispatch} />
                            <ExpYearInput state={state.expYear} dispatch={dispatch} />

                        </div>
                    </div>

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
