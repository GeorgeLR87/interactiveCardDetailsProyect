import { ChangeEvent } from "react";
import { EFormaActions, EFormData } from "../../../enums/Form";
import { formatCardNumber } from "../../../helpers/helpers";
import { useForm } from "../../../hooks/useForm";

const CardNumberInput = () => {

  const {state, dispatch, errors} = useForm()
  const { cardNumber } = state
  const cardNumberError = errors[EFormData.CardNumber];


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
        className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${cardNumberError ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
        id={EFormData.CardNumber}
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        value={cardNumber}
        onChange={handleChange}
        maxLength={19}
      />
      {cardNumberError && <p className="text-red-card text-xsl mt-1">{cardNumberError}</p>}
    </div>
  );
};

export default CardNumberInput;
