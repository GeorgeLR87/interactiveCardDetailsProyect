import { ChangeEvent, Dispatch } from "react";
import { EFormaActions, EFormData } from "../../../enums/Form";
import { formatCardNumber } from "../../../helpers/helpers";
import { FormActions } from "../../../reducers/form-reducer";

type CardNumberInputProps = {
  state: string;
  dispatch: Dispatch<FormActions>;
  error?: string;
};
const CardNumberInput = ({ state, dispatch, error }: CardNumberInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedCardNumber = formatCardNumber(e.target.value);
    dispatch({
      type: EFormaActions.SetCardNumber,
      payload: { cardNumber: formattedCardNumber as EFormData.CardNumber },
    });
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={EFormData.CardNumber}
        className="block uppercase text-sm text-deep-violet mb-1"
      >
        Card Number
      </label>
      <input
        className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${error ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
        id={EFormData.CardNumber}
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        value={state}
        onChange={handleChange}
        maxLength={19}
      />
      {error && <p className="text-red-card text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CardNumberInput;
