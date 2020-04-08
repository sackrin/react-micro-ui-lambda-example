import { StagesStage } from '../Types/StagesStage';

type GetNextStage = (
  stages: StagesStage[],
  stage: string,
) => void | StagesStage;

const getNextStage: GetNextStage = (stages, stage) => {
  const idx = stages.findIndex(_stage => _stage.stage === stage);
  return idx === stages.length - 1 ? undefined : stages[idx + 1];
};

export default getNextStage;
