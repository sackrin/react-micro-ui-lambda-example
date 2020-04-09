export type RegisterIsDirtyAction = {
  type: 'SET_REGISTER_ISDIRTY';
  property: string;
  isDirty: boolean;
};

type SetRegisterIsDirtyAction = (
  property: string,
  isDirty: boolean,
) => RegisterIsDirtyAction;

const setRegisterIsDirtyAction: SetRegisterIsDirtyAction = (
  property,
  isDirty,
) => ({
  type: 'SET_REGISTER_ISDIRTY',
  property,
  isDirty,
});

export default setRegisterIsDirtyAction;
