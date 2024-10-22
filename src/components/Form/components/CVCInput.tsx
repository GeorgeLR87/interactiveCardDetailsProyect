import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import { EFormData } from "../../../enums/Form";

const CVCInput = () => {

  const { state, errors, handleChangeCVC } = useContext(FormContext)
  const { cvc } = state
  const cvcError = errors[EFormData.CVC]

  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={EFormData.CVC}
        className="block uppercase text-sm text-deep-violet mb-1"
      >
        CVC
      </label>
      <input
        className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${cvcError ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
        id={EFormData.CVC}
        type="number"
        placeholder="e.g. 123"
        value={cvc}
        onChange={handleChangeCVC}
        maxLength={3}
      />
      {cvcError && <p className="text-red-card text-xsl mt-1">{cvcError}</p>}
    </div>
  );
};

export default CVCInput;
