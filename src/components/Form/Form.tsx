import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import Dates from "../Dates/Dates";
import CardHolderNameInput from "./components/CardHolderNameInput";
import CardNumberInput from "./components/CardNumberInput";
import CVCInput from "./components/CVCInput";

const Form = () => {

  const { handleSubmitForm } = useContext(FormContext)

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col justify-center items-center mx-2 md:mt-14 lg:mt-0">
      <div className="w-full max-w-sm">

        <CardHolderNameInput />
        <CardNumberInput />

        <div className="flex flex-row justify-between gap-4 w-full">
          
          <Dates />
          <CVCInput />
          
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
