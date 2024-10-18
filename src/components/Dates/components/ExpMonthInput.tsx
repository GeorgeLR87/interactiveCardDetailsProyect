import { ChangeEvent } from "react"
import { EFormaActions, EFormData } from "../../../enums/Form"
import { formatMonth } from "../../../helpers/helpers"
import { useForm } from "../../../hooks/useForm"

const ExpMonthInput = () => {

    const { state, dispatch, errors } = useForm()
    const { expMonth } = state
    const expMonthError = errors[EFormData.ExpMonth];
    const expYearError = errors[EFormData.ExpYear];
    

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
                value={expMonth}
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