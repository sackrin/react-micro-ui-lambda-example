export type RegisterAddressValueAction = {
  type: 'SET_REGISTER_ADDRESS_VALUE';
  property: string;
  value: any;
};

type SetRegisterAddressValueAction = (
  property: string,
  value: any,
) => RegisterAddressValueAction;

const setRegisterAddressValueAction: SetRegisterAddressValueAction = (
  property,
  value,
) => ({
  type: 'SET_REGISTER_ADDRESS_VALUE',
  property,
  value,
});

export default setRegisterAddressValueAction;
