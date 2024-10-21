import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import { EFormData } from "../../../enums/Form";

const CardHolderNameInput = () => {

  const { state, errors, handleChangeCardHolderName } = useContext(FormContext)
  const {cardholderName} = state
  const cardholderNameError = errors[EFormData.CardholderName];

  return (
    <div className="mb-4">
      <label
        htmlFor={EFormData.CardholderName}
        className="block uppercase text-sm text-very-dark-violet mb-1"
      >
        Cardholder Name
      </label>
      <input
        className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${cardholderNameError ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
        id={EFormData.CardholderName}
        type="text"
        placeholder="e.g. Jane Appleseed"
        value={cardholderName}
        onChange={handleChangeCardHolderName}
      />
      {cardholderNameError && <p className="text-red-card text-xsl mt-1">{cardholderNameError}</p>}
    </div>
  );
};

export default CardHolderNameInput;
