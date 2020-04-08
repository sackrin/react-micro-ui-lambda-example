import { StagesContextState } from './StagesContextState';
import { StagesCurrentAction } from '../Actions/SetStagesCurrentAction';
import { StageViewedAction } from '../Actions/setStageViewedAction';

export type StagesContextValue = StagesContextState & {
  dispatch: (action: StageViewedAction | StagesCurrentAction) => void;
};
