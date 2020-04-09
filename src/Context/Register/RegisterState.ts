import type { RegisterContextState } from './Types/RegisterContextState';
import type { SetRegisterProfile } from "./Actions/setRegisterProfileAction";
import type { SetRegisterAddress } from "./Actions/setRegisterAddressAction";
import type { SetRegisterIsValid } from "./Actions/setRegisterIsValidAction";
import type { RegisterProfileValueAction } from "./Actions/setRegisterProfileValueAction";
import type { RegisterAddressValueAction } from "./Actions/setRegisterAddressValueAction";
import type { RegisterIsDirtyAction } from "./Actions/setRegisterIsDirtyAction";

const RegisterState = (state: RegisterContextState, action: | SetRegisterAddress
  | SetRegisterIsValid
  | SetRegisterProfile
  | RegisterIsDirtyAction
  | RegisterProfileValueAction
  | RegisterAddressValueAction) => {
  switch (action.type) {
    case 'SET_REGISTER_ISVALID':
      return {
        ...state,
        isValid: action.isValid,
      };
    case 'SET_REGISTER_ISDIRTY':
      return {
        ...state,
        [action.property]: {
          ...state[action.property],
          isDirty: action.isDirty
        }
      };
    case 'SET_REGISTER_PROFILE':
      return {
        ...state,
        profile: {...action.profile},
      };
    case 'SET_REGISTER_PROFILE_VALUE':
      return {
        ...state,
        profile: {...state.profile, data: { ...state.profile.data, [action.property]: action.value } },
      };
    case 'SET_REGISTER_ADDRESS':
      return {
        ...state,
        address: {...action.address},
      };
    case 'SET_REGISTER_ADDRESS_VALUE':
      return {
        ...state,
        address: {...state.address, data: { ...state.address.data, [action.property]: action.value } },
      };
    default:
      throw new Error();
  }
};

export default RegisterState;
