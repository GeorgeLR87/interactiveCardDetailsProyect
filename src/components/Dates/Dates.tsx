import { EFormData } from "../../enums/Form";
import ExpMonthInput from "./components/ExpMonthInput";
import ExpYearInput from "./components/ExpYearInput";

const Dates = () => (
    <div className="mb-4">
        <label
            htmlFor={EFormData.ExpMonth}
            className="block uppercase text-sm text-deep-violet mb-1"
        >
            Exp. Date (MM/YY)
        </label>
        <div className="flex flex-row gap-2">

            <ExpMonthInput />
            <ExpYearInput />

        </div>
    </div>
)

export default Dates