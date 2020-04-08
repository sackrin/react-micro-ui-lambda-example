import { StagesStage } from '../Types/StagesStage';

type SetStageAsViewed = (stages: StagesStage[], stage: string) => StagesStage[];

const setStageAsViewed: SetStageAsViewed = (stages, stage) =>
  stages.map(_stage =>
    _stage.stage === stage ? { ..._stage, isViewed: true } : _stage,
  );

export default setStageAsViewed;
