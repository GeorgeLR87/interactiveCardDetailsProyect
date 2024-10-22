import { useContext } from "react"
import { FormContext } from "../../../context/FormContext"
import { EFormData } from "../../../enums/Form"

const ExpYearInput = () => {

    const { state, errors, handleChangeExpYear } = useContext(FormContext)
    const { expYear } = state
    const expYearError = errors[EFormData.ExpYear];

    return (
        <div>
            <input
                className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${expYearError ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
                id={EFormData.ExpYear}
                type="number"
                placeholder="YY"
                value={expYear}
                onChange={handleChangeExpYear}
                maxLength={2}
            />
        </div>
    )
}

export default ExpYearInput