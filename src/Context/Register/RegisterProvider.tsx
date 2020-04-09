import React, { useEffect, useReducer, useCallback } from 'react';
import useCompare from 'use-deep-compare-effect';
import RegisterContext from './RegisterContext';
import RegisterState from './RegisterState';
import { getDefaultRegisterState } from './Helpers';
import { setRegisterProfileAction, setRegisterAddressAction, setRegisterIsValidAction } from "./Actions";
import { getRegisterProfileValidation, getRegisterAddressValidation } from "./Validation";
import type { RegisterProfileData } from './Types/RegisterProfileData';
import type { RegisterAddressData } from './Types/RegisterAddressData';
import type { RegisterProfile } from './Types/RegisterProfile';
import type { RegisterAddress } from './Types/RegisterAddress';

const { Provider } = RegisterContext;

type Props = {
  component: {
    profile?: RegisterProfileData;
    address?: RegisterAddressData;
    onChange?: (profile: RegisterProfile, address: RegisterAddress, isValid: boolean) => void;
    onRegister?: (profile: RegisterProfile, address: RegisterAddress) => void;
  };
  children: JSX.Element;
};

const RegisterProvider = ({ component, children }: Props) => {
  // Setting up the initial state
  const [state, dispatch] = useReducer(RegisterState, getDefaultRegisterState());
  // Watching for changes to the profile state
  useCompare(() => {
    // Retrieve the profile state
    const { profile } = state;
    // perform validation
    const [isValid, errors] = getRegisterProfileValidation(profile.data);
    // update profile validation result
    dispatch(setRegisterProfileAction({ ...profile, isValid, data: profile.data, errors }));
  }, [state.profile]);
  // Watching for changes to the address state
  useCompare(() => {
    // Extract the current address state
    const { address } = state;
    // perform validation
    const [isValid, errors] = getRegisterAddressValidation(address.data);
    // update address validation result
    dispatch(setRegisterAddressAction({ ...address, isValid, data: address.data, errors }));
  }, [state.address]);
  // Watching for changes to the address and profile valid flags
  useEffect(() => {
    // extract profile and address state values
    const { profile, address } = state;
    // Update the valid state with the result of both profile and address
    dispatch(setRegisterIsValidAction(profile.isValid && address.isValid));
  }, [state.profile.isValid, state.address.isValid]);
  // Watching for changes to trigger onChange
  useCompare(() => {
    // Extract the onChange callback
    const { onChange = (profile, address, isValid) => {} } = component;
    // Perform the onChange action
    // This is what updates the outside world to changes
    // We want this to happen when any of the major states change
    onChange(state.profile, state.address, state.isValid);
  }, [state.isValid, state.profile, state.address]);

  const doSubmit = useCallback(() => {
    // Extract the onRegister callback
    const { onRegister = (profile, address) => {} } = component;
    // Trigger the provided onRegister callback
    onRegister(state.profile, state.address);
  }, []);

  return <Provider value={{ ...state, doSubmit, dispatch }}>{children}</Provider>;
};

export default RegisterProvider;
