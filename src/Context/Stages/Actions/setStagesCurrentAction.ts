export type StagesCurrentAction = {
  type: 'SET_STAGES_CURRENT';
  current: string;
};

export type SetStagesCurrentAction = (current: string) => StagesCurrentAction;

const setStagesCurrentAction: SetStagesCurrentAction = current => ({
  type: 'SET_STAGES_CURRENT',
  current,
});

export default setStagesCurrentAction;
