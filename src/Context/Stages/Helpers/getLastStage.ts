import { StagesStage } from '../Types/StagesStage';

type GetLastStage = (
  stages: StagesStage[],
  stage: string,
) => void | StagesStage;

const getLastStage: GetLastStage = (stages, stage) => {
  const idx = stages.findIndex(_stage => _stage.stage === stage);
  return idx === 0 ? undefined : stages[(idx - 1)];
};

export default getLastStage;
