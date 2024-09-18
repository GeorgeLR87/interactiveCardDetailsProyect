import { ChangeEvent, Dispatch } from "react";
import { EFormaActions, EFormData } from "../../../enums/Form";
import { formatCVC } from "../../../helpers/helpers";
import { FormActions } from "../../../reducers/form-reducer";

type CVCInputProps = {
  state: string;
  dispatch: Dispatch<FormActions>;
  error?: string;
};

const CVCInput = ({ state, dispatch, error }: CVCInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedCVC = formatCVC(e.target.value);
    dispatch({
      type: EFormaActions.SetCVC,
      payload: { cvc: formattedCVC as EFormData.CVC },
    });
  };

  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={EFormData.CVC}
        className="block uppercase text-sm text-deep-violet mb-1"
      >
        CVC
      </label>
      <input
        className={`w-full p-2 border rounded-lg placeholder:text-light-grayish-violet focus:outline-none ${error ? 'border-red-card focus:border-red-card' : 'focus:border-purple-700'}`}
        id={EFormData.CVC}
        type="number"
        placeholder="e.g. 123"
        value={state}
        onChange={handleChange}
        maxLength={3}
      />
      {error && <p className="text-red-card text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CVCInput;
