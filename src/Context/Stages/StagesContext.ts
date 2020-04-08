import { createContext } from 'react';
import { getDefaultStagesState } from "./Helpers";
import type { StagesContextValue } from './Types/StagesContextValue';

const StagesContext = createContext<StagesContextValue>({
  ...getDefaultStagesState(),
  dispatch: (action) => {}
});

export default StagesContext;
