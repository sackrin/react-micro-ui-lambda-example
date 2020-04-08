export type RegisterAddressIsDirtyAction = {
  type: 'SET_REGISTER_ADDRESS_ISDIRTY';
  isDirty: boolean;
};

type SetRegisterAddressIsDirtyAction = (
  isDirty: boolean,
) => RegisterAddressIsDirtyAction;

const setRegisterAddressIsDirtyAction: SetRegisterAddressIsDirtyAction = isDirty => ({
  type: 'SET_REGISTER_ADDRESS_ISDIRTY',
  isDirty,
});

export default setRegisterAddressIsDirtyAction;
