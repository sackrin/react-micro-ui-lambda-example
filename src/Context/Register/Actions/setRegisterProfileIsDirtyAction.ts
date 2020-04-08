export type RegisterProfileIsDirtyAction = {
  type: 'SET_REGISTER_PROFILE_ISDIRTY';
  isDirty: boolean;
};

type SetRegisterProfileIsDirtyAction = (
  isDirty: boolean,
) => RegisterProfileIsDirtyAction;

const setRegisterProfileIsDirtyAction: SetRegisterProfileIsDirtyAction = isDirty => ({
  type: 'SET_REGISTER_PROFILE_ISDIRTY',
  isDirty,
});

export default setRegisterProfileIsDirtyAction;
