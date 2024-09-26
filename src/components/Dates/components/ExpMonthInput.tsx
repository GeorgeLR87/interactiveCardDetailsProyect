import { ChangeEvent, Dispatch } from "react"
import { FormActions } from "../../../reducers/form-reducer"
import { formatMonth } from "../../../helpers/helpers"
import { EFormaActions, EFormData } from "../../../enums/Form"

type ExpMonthInputProps = {
    state: string
    dispatch: Dispatch<FormActions>
    expMonthError?: string;
    expYearError?: string;
}

const ExpMonthInput = ({ state, dispatch, expMonthError, expYearError }: ExpMonthInputProps) => {

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
                className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${expMonthError ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
                id={EFormData.ExpMonth}
                type="number"
                placeholder="MM"
                value={state}
                onChange={handleChange}
                maxLength={2}
            />
            {(expMonthError || expYearError) && (
                <p className="text-red-card text-xsl mt-1">
                    {expMonthError || expYearError}
                </p>
            )}
        </div>
    )
}

export default ExpMonthInput 