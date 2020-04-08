import { StagesContextState } from '../Types/StagesContextState';

type GetDefaultStagesState = () => StagesContextState;

const getDefaultStagesState: GetDefaultStagesState = () => ({
  current: 'PROFILE',
  stages: [
    { stage: 'PROFILE', label: 'Profile', isViewed: false },
    { stage: 'ADDRESS', label: 'Address', isViewed: false },
    { stage: 'REVIEW', label: 'Review', isViewed: false },
  ],
});

export default getDefaultStagesState;
