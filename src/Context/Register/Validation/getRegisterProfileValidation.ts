import getValidator from "./getValidator";
import { RegisterProfileData } from '../Types/RegisterProfileData';

type GetRegisterProfileValidation = (data: RegisterProfileData) => any;

export const rules = {
  firstName: 'required|string',
  lastName: 'required|string',
  email: 'required|email',
  phone: 'telephone'
};

const getRegisterProfileValidation: GetRegisterProfileValidation = data => {
  const validation = getValidator(data, rules);
  const isValid = validation.passes();
  return [isValid, isValid ? null : validation.errors.all() ]
};

export default getRegisterProfileValidation;
