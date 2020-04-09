import getValidator from "./getValidator";
import { RegisterAddressData } from '../Types/RegisterAddressData';

type GetRegisterAddressValidation = (data: RegisterAddressData) => any;

export const rules = {
  streetNumber: 'required|numeric',
  streetName: 'required|string',
  streetType: 'required|in:Cl,Ct,St,Pl,Ave',
  suburb: 'required|string',
  postcode: 'required|numeric|between:800,8000'
};

const getRegisterAddressValidation: GetRegisterAddressValidation = data => {
  const validation = getValidator(data, rules);
  const isValid = validation.passes();
  return [isValid, isValid ? null : validation.errors.all() ]
};

export default getRegisterAddressValidation;
