import { StagesContextState } from '../Types/StagesContextState';

type GetDefaultStagesState = () => StagesContextState;

const getDefaultStagesState: GetDefaultStagesState = () => ({
  current: 'PROFILE',
  stages: [
    // @TODO would be cool to determine back and continue button types here
    { stage: 'PROFILE', label: 'Profile', isViewed: false, isSubmitted: false },
    { stage: 'ADDRESS', label: 'Address', isViewed: false, isSubmitted: false },
    { stage: 'REVIEW', label: 'Review', isViewed: false, isSubmitted: false },
  ],
});

export default getDefaultStagesState;
