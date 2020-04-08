import { RegisterProfile } from '../Types/RegisterProfile';

export type SetRegisterProfile = { type: 'SET_REGISTER_PROFILE'; profile: RegisterProfile };

export type SetRegisterProfileAction = (profile: RegisterProfile) => SetRegisterProfile;

const setRegisterProfileAction: SetRegisterProfileAction = profile => ({ type: 'SET_REGISTER_PROFILE', profile });

export default setRegisterProfileAction;
