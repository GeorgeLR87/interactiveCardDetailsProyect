import { Dispatch } from "react";
import { EFormData } from "../../enums/Form"
import { FormActions } from "../../reducers/form-reducer";
import ExpMonthInput from "./components/ExpMonthInput"
import ExpYearInput from "./components/ExpYearInput"

type ExpDatesInputProps = {
    state: {
    expMonth: string;
    expYear: string;
}
dispatch: Dispatch<FormActions>;
}

const Dates = ({ state, dispatch }: ExpDatesInputProps) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={EFormData.ExpMonth}
                className="block uppercase text-sm text-very-dark-violet mb-1"
            >
                Exp. Date (MM/YY)
            </label>    
            <div className="flex flex-row gap-2">

                <ExpMonthInput state={state.expMonth} dispatch={dispatch} />
                <ExpYearInput state={state.expYear} dispatch={dispatch} />

            </div>
        </div>
    )
}

export default Dates