import { Dispatch } from "react";
import { EFormData } from "../../enums/Form";
import { FormActions } from "../../reducers/form-reducer";
import { FormData } from "../../types/FormData";
import Dates from "../Dates/Dates";
import CardHolderNameInput from "./components/CardHolderNameInput";
import CardNumberInput from "./components/CardNumberInput";
import CVCInput from "./components/CVCInput";

type FormProps = {
  state: FormData;
  dispatch: Dispatch<FormActions>;
};

const Form = ({ state, dispatch }: FormProps) => {
  return (
    <section className="flex flex-col justify-center items-center mx-2 md:mt-14 lg:mt-0">
      <div className="w-full max-w-sm">
        <CardHolderNameInput state={state.cardholderName} dispatch={dispatch} />
        <CardNumberInput state={state.cardNumber} dispatch={dispatch} />

        <div className="flex flex-row justify-between gap-4 w-full">
          <Dates
            state={{
              expMonth: state[EFormData.ExpMonth],
              expYear: state[EFormData.ExpYear],
            }}
            dispatch={dispatch}
          />
          <CVCInput state={state.cvc} dispatch={dispatch} />
        </div>

        <button className="w-full mt-6 bg-very-dark-violet text-white py-3 rounded-lg text--base hover:bg-dark-grayish-violet transition duration-200">
          Confirm
        </button>
      </div>
    </section>
  );
};

export default Form;
