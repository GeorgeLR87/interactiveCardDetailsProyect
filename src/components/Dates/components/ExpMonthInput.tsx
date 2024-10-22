import { useContext } from "react"
import { FormContext } from "../../../context/FormContext"
import { EFormData } from "../../../enums/Form"

const ExpMonthInput = () => {

    const { state, errors, handleChangeExpMonth } = useContext(FormContext)
    const { expMonth } = state
    const expMonthError = errors[EFormData.ExpMonth];
    const expYearError = errors[EFormData.ExpYear];

    return (
        <div>
            <input
                className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${expMonthError ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
                id={EFormData.ExpMonth}
                type="number"
                placeholder="MM"
                value={expMonth}
                onChange={handleChangeExpMonth}
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