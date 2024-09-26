import { EFormData } from "../enums/Form";

export type FormData = {
  cardholderName: EFormData.CardholderName;
  cardNumber: EFormData.CardNumber;
  expMonth: EFormData.ExpMonth;
  expYear: EFormData.ExpYear;
  cvc: EFormData.CVC;
};

export type FormErrors = {
  [key in EFormData]?: string;
};
