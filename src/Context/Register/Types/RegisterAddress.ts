import { RegisterAddressData } from './RegisterAddressData';

export type RegisterAddress = {
  isValid: boolean;
  isDirty: boolean;
  data: RegisterAddressData;
  errors: any;
};
