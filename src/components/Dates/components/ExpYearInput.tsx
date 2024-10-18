import { ChangeEvent } from "react"
import { EFormaActions, EFormData } from "../../../enums/Form"
import { formatYear } from "../../../helpers/helpers"
import { useForm } from "../../../hooks/useForm"

const ExpYearInput = () => {

    const { state, dispatch, errors } = useForm()
    const { expYear } = state
    const expYearError = errors[EFormData.ExpYear];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedYear = formatYear(e.target.value);
        dispatch({
            type: EFormaActions.SetExpYear,
            payload: { expYear: formattedYear as EFormData.ExpYear },
        })
    }

    return (
        <div>
            <input
                className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${expYearError ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
                id={EFormData.ExpYear}
                type="number"
                placeholder="YY"
                value={expYear}
                onChange={handleChange}
                maxLength={2}
            />
        </div>
    )
}

export default ExpYearInput