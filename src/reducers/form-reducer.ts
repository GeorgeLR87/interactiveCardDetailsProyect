import { EFormaActions, EFormData } from "../enums/Form";
import { FormData } from "../types/FormData";

export type FormActions =
  | {
      type: EFormaActions.SetCardholderName;
      payload: { cardholderName: FormData[EFormData.CardholderName] };
    }
  | {
      type: EFormaActions.SetCardNumber;
      payload: { cardNumber: FormData[EFormData.CardNumber] };
    }
  | {
      type: EFormaActions.SetExpMonth;
      payload: { expMonth: FormData[EFormData.ExpMonth] };
    }
  | {
      type: EFormaActions.SetExpYear;
      payload: { expYear: FormData[EFormData.ExpYear] };
    }
  | {
      type: EFormaActions.SetCVC;
      payload: { cvc: FormData[EFormData.CVC] };
    };

export const initialState: FormData = {
  cardholderName: "" as EFormData.CardholderName,
  cardNumber: "" as EFormData.CardNumber,
  expMonth: "" as EFormData.ExpMonth,
  expYear: "" as EFormData.ExpYear,
  cvc: "" as EFormData.CVC,
};

export const formReducer = (
  state: FormData = initialState,
  action: FormActions,
) => {
  if (action.type === EFormaActions.SetCardholderName) {
    return {
      ...state,
      cardholderName: action.payload.cardholderName,
    };
  }
  if (action.type === EFormaActions.SetCardNumber) {
    return {
      ...state,
      cardNumber: action.payload.cardNumber,
    };
  }
  if (action.type === EFormaActions.SetExpMonth) {
    return {
      ...state,
      expMonth: action.payload.expMonth,
    };
  }
  if (action.type === EFormaActions.SetExpYear) {
    return {
      ...state,
      expYear: action.payload.expYear,
    };
  }
  if (action.type === EFormaActions.SetCVC) {
    return {
      ...state,
      cvc: action.payload.cvc,
    };
  }
  return state;
};
