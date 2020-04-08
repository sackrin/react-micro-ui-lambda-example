export type RegisterProfileValueAction = {
  type: 'SET_REGISTER_PROFILE_VALUE';
  property: string;
  value: any;
};

type SetRegisterProfileValueAction = (
  property: string,
  value: any,
) => RegisterProfileValueAction;

const setRegisterProfileValueAction: SetRegisterProfileValueAction = (
  property,
  value,
) => ({
  type: 'SET_REGISTER_PROFILE_VALUE',
  property,
  value,
});

export default setRegisterProfileValueAction;
