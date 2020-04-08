import { RegisterProfileData } from './RegisterProfileData';

export type RegisterProfile = {
  isValid: boolean;
  isDirty: boolean;
  data: RegisterProfileData;
  errors: any;
};
