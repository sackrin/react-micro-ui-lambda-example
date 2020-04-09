import {StagesStage} from "../Types/StagesStage";

type IsStageSubmitted = (stages: StagesStage[], stage: string) => boolean;

const isStageSubmitted: IsStageSubmitted = (stages, stage) => {
  // @TODO Should DRY this up to a getStageByCode helper at some point
  const _stage = stages.find(_stage => _stage.stage === stage);
  return _stage ? _stage.isSubmitted : false;
};

export default isStageSubmitted;
