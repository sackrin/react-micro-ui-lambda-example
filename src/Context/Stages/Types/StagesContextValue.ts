import { StagesContextState } from './StagesContextState';
import { StagesCurrentAction } from '../Actions/setStagesCurrentAction';
import { StageViewedAction } from '../Actions/setStageViewedAction';

export type StagesContextValue = StagesContextState & {
  dispatch: (action: StageViewedAction | StagesCurrentAction) => void;
};
