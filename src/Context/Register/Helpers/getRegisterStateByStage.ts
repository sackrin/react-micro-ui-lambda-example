import { RegisterContextState } from '../Types/RegisterContextState';
import { RegisterProfile } from '../Types/RegisterProfile';
import { RegisterAddress } from '../Types/RegisterAddress';

type GetRegisterStateByStage = (
  state: RegisterContextState,
  stage: string,
) => void | RegisterProfile | RegisterAddress;

const getRegisterStateByStage: GetRegisterStateByStage = (state, stage) => {
  switch (stage) {
    case 'PROFILE':
      return state.profile;
    case 'ADDRESS':
      return state.address;
    default:
      return undefined;
  }
};

export default getRegisterStateByStage;
