import { ChangeEvent, Dispatch } from "react"
import { FormActions } from "../../../reducers/form-reducer"
import { formatCardNumber } from "../../../helpers/helpers"

type CardNumberInputProps = {
    state: string;
    dispatch: Dispatch<FormActions>;
};
const CardNumberInput = ({ state, dispatch }: CardNumberInputProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedCardNumber = formatCardNumber(e.target.value)
        dispatch({
            type: "set-card-number",
            payload: { cardNumber: formattedCardNumber },
        })
    }

    return (
        <div className="mb-4">
            <label
                htmlFor="cardNumber"
                className="block uppercase text-sm text-very-dark-violet mb-1"
            >
                Card Number
            </label>
            <input
                className="w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:border-purple-700 focus:outline-none"
                id="cardNumber"
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
                value={state}
                onChange={handleChange}
                maxLength={19}
            />
        </div>
    )
}

export default CardNumberInput 