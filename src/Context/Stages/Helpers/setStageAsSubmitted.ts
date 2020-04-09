import { StagesStage } from '../Types/StagesStage';

type SetStageAsSubmitted = (
  stages: StagesStage[],
  stage: string,
) => StagesStage[];

// @TODO rename to prior stages as submitted
const setStageAsSubmitted: SetStageAsSubmitted = (stages, stage) => {
  const idx = stages.findIndex(_stage => _stage.stage === stage);
  return stages.map((_stage, _dx) =>
    idx > _dx ? { ..._stage, isSubmitted: true } : { ..._stage, isSubmitted: false },
  );
};

export default setStageAsSubmitted;
