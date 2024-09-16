import { ChangeEvent, Dispatch } from "react"
import { FormActions } from "../../../reducers/form-reducer"
import { formatMonth } from "../../../helpers/helpers"
import { EFormaActions, EFormData } from "../../../enums/Form"

type ExpMonthInputProps = {
    state: string
    dispatch: Dispatch<FormActions>
}

const ExpMonthInput = ({ state, dispatch }: ExpMonthInputProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedMonth = formatMonth(e.target.value)
        dispatch({
            type: EFormaActions.SetExpMonth,
            payload: { expMonth: formattedMonth },
        })
    }

    return (
        <input
            className="w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:border-purple-700 focus:outline-none"
            id={EFormData.ExpMonth}
            type="number"
            placeholder="MM"
            value={state}
            onChange={handleChange}
            maxLength={2}
        />
    )
}

export default ExpMonthInput 