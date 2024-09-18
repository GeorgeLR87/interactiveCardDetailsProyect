import { ChangeEvent, Dispatch } from "react"
import { FormActions } from "../../../reducers/form-reducer"
import { formatMonth } from "../../../helpers/helpers"
import { EFormaActions, EFormData } from "../../../enums/Form"

type ExpMonthInputProps = {
    state: string
    dispatch: Dispatch<FormActions>
    error?: string;
}

const ExpMonthInput = ({ state, dispatch, error }: ExpMonthInputProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedMonth = formatMonth(e.target.value)
        dispatch({
            type: EFormaActions.SetExpMonth,
            payload: { expMonth: formattedMonth as EFormData.ExpMonth },
        })
    }

    return (
        <div>
            <input
                className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${error ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
                id={EFormData.ExpMonth}
                type="number"
                placeholder="MM"
                value={state}
                onChange={handleChange}
                maxLength={2}
            />
            {error && <p className="text-red-card text-sm mt-1">{error}</p>}
        </div>
    )
}

export default ExpMonthInput 