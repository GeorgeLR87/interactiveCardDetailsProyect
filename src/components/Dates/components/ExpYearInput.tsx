import { ChangeEvent, Dispatch } from "react"
import { FormActions } from "../../../reducers/form-reducer"
import { formatYear } from "../../../helpers/helpers"
import { EFormaActions, EFormData } from "../../../enums/Form"

type ExpYearInputProps = {
    state: string;
    dispatch: Dispatch<FormActions>;
    error?: string;
}

const ExpYearInput = ({ state, dispatch, error }: ExpYearInputProps) => {
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
                className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${error ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
                id={EFormData.ExpYear}
                type="number"
                placeholder="YY"
                value={state}
                onChange={handleChange}
                maxLength={2}
            />
        </div>
    )
}

export default ExpYearInput