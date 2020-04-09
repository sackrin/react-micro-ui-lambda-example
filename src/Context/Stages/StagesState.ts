import { setStageAsViewed, setStageAsSubmitted } from "./Helpers";
import type { StagesContextState } from './Types/StagesContextState';
import type { StagesCurrentAction } from "./Actions/setStagesCurrentAction";
import type { StageViewedAction } from "./Actions/setStageViewedAction";

const StagesState = (state: StagesContextState, action: StagesCurrentAction | StageViewedAction) => {
  switch (action.type) {
    case 'SET_STAGES_CURRENT':
      return {
        ...state,
        current: action.current,
      };
    case 'SET_STAGES_STAGE_VIEWED': {
      return {
        ...state,
        stages: setStageAsSubmitted(setStageAsViewed(state.stages, action.stage), action.stage),
      };
    }
    default:
      throw new Error();
  }
};

export default StagesState;
