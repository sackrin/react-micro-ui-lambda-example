import { RegisterContextState } from './RegisterContextState';
import { SetRegisterAddress } from '../Actions/setRegisterAddressAction';
import { SetRegisterIsValid } from '../Actions/setRegisterIsValidAction';
import { SetRegisterProfile } from '../Actions/setRegisterProfileAction';
import { RegisterProfileValueAction } from '../Actions/setRegisterProfileValueAction';
import { RegisterAddressValueAction } from '../Actions/setRegisterAddressValueAction';
import { RegisterIsDirtyAction } from '../Actions/setRegisterIsDirtyAction';

export type RegisterContextValue = RegisterContextState & {
  doSubmit: () => void;
  dispatch: (
    action:
      | SetRegisterAddress
      | SetRegisterIsValid
      | SetRegisterProfile
      | RegisterIsDirtyAction
      | RegisterProfileValueAction
      | RegisterAddressValueAction,
  ) => void;
};
