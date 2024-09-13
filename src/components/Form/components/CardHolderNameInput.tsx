import { ChangeEvent, Dispatch } from "react"
import { FormActions } from "../../../reducers/form-reducer"
import { EFormaActions, EFormData } from "../../../enums/Form"

type CardholderNameInputProps = {
    state: string;
    dispatch: Dispatch<FormActions>;
};

const CardHolderNameInput = ({ state, dispatch }: CardholderNameInputProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: EFormaActions.SetCardholderName,
            payload: { cardholderName: e.target.value },
        })
    }

    return (
        <div className="mb-4">
            <label
                htmlFor={EFormData.CardholderName}
                className="block uppercase text-sm text-very-dark-violet mb-1"
            >
                Cardholder Name
            </label>
            <input
                required
                className="w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:border-purple-700 focus:outline-none"
                id={EFormData.CardholderName}
                type="text"
                placeholder="e.g. Jane Appleseed"
                value={state}
                onChange={handleChange}
            />
        </div>
    )
}

export default CardHolderNameInput