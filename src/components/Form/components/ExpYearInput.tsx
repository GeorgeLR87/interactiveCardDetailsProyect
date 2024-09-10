import { ChangeEvent, Dispatch } from "react"
import { FormActions } from "../../../reducers/form-reducer"
import { formatYear } from "../../../helpers/helpers"

type ExpYearInputProps = {
    state: string;
    dispatch: Dispatch<FormActions>;
}

const ExpYearInput = ({ state, dispatch }: ExpYearInputProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedYear = formatYear(e.target.value);
        dispatch({
            type: "set-exp-year",
            payload: { expYear: formattedYear },
        })
    }

    return (
        <input
            className="w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:border-purple-700 focus:outline-none"
            id="expYear"
            type="number"
            placeholder="YY"
            value={state}
            onChange={handleChange}
            maxLength={2}
        />
    )
}

export default ExpYearInput