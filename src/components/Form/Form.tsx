import { Dispatch, SetStateAction, useState } from "react";
import { EFormData } from "../../enums/Form";
import { FormActions } from "../../reducers/form-reducer";
import { FormData, FormErrors } from "../../types/FormData";
import Dates from "../Dates/Dates";
import CardHolderNameInput from "./components/CardHolderNameInput";
import CardNumberInput from "./components/CardNumberInput";
import CVCInput from "./components/CVCInput";
import { validateForm } from "../../helpers/helpers";

type FormProps = {
  state: FormData;
  dispatch: Dispatch<FormActions>;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
};

const Form = ({ state, dispatch, setIsSubmitted }: FormProps) => {
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateForm(state);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true)
    }

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mx-2 md:mt-14 lg:mt-0">
      <div className="w-full max-w-sm">
        <CardHolderNameInput
          state={state.cardholderName}
          dispatch={dispatch}
          error={errors[EFormData.CardholderName]}
        />
        <CardNumberInput
          state={state.cardNumber}
          dispatch={dispatch}
          error={errors[EFormData.CardNumber]}
        />

        <div className="flex flex-row justify-between gap-4 w-full">
          <Dates
            state={{
              expMonth: state[EFormData.ExpMonth],
              expYear: state[EFormData.ExpYear],
            }}
            dispatch={dispatch}
            errors={{
              expMonth: errors[EFormData.ExpMonth],
              expYear: errors[EFormData.ExpYear],
            }}
          />
          <CVCInput
            state={state.cvc}
            dispatch={dispatch}
            error={errors[EFormData.CVC]}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-deep-violet text-white py-3 rounded-lg text--base hover:bg-purplish-grey transition duration-200">
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Form;
