import type { RegisterProfile } from './RegisterProfile';
import type { RegisterAddress } from './RegisterAddress';

export type RegisterContextState = {
  isValid: boolean;
  profile: RegisterProfile;
  address: RegisterAddress;
};
