import React, { useReducer } from 'react';
import StagesContext from './StagesContext';
import StagesState from './StagesState';
import { getDefaultStagesState } from './Helpers';

const { Provider } = StagesContext;

type Props = {
  children: JSX.Element;
};

const StagesProvider = ({ children }: Props) => {
  // Setting up the initial state
  const [state, dispatch] = useReducer(StagesState, getDefaultStagesState());
  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export default StagesProvider;
