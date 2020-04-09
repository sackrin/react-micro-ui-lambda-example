export type SetRegisterIsValid = {
  type: 'SET_REGISTER_ISVALID';
  isValid: boolean;
};

export type SetRegisterIsValidAction = (isValid: boolean) => SetRegisterIsValid;

const setRegisterIsValidAction: SetRegisterIsValidAction = isValid => ({
  type: 'SET_REGISTER_ISVALID',
  isValid,
});

export default setRegisterIsValidAction;
