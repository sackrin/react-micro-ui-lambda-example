export type StageViewedAction = {
  type: 'SET_STAGES_STAGE_VIEWED';
  stage: string;
};

type SetStageViewedAction = (stage: string) => StageViewedAction;

const setStageViewedAction: SetStageViewedAction = stage => ({
  type: 'SET_STAGES_STAGE_VIEWED',
  stage,
});

export default setStageViewedAction;
