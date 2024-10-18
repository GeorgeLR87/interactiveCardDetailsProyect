import { ChangeEvent } from "react";
import { EFormaActions, EFormData } from "../../../enums/Form";
import { useForm } from "../../../hooks/useForm";

const CardHolderNameInput = () => {

  const { dispatch, state, errors } = useForm()
  const {cardholderName} = state
  const cardholderNameError = errors[EFormData.CardholderName];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch({
      type: EFormaActions.SetCardholderName,
      payload: { cardholderName: e.target.value as EFormData.CardholderName },
    });
  };

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
        onChange={handleChange}
      />
      {cardholderNameError && <p className="text-red-card text-xsl mt-1">{cardholderNameError}</p>}
    </div>
  );
};

export default CardHolderNameInput;
