import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import { EFormData } from "../../../enums/Form";

const CardNumberInput = () => {

  const {state, errors, handleChangeCardHolderNumber} = useContext(FormContext)
  const { cardNumber } = state
  const cardNumberError = errors[EFormData.CardNumber];

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
        onChange={handleChangeCardHolderNumber}
        maxLength={19}
      />
      {cardNumberError && <p className="text-red-card text-xsl mt-1">{cardNumberError}</p>}
    </div>
  );
};

export default CardNumberInput;
