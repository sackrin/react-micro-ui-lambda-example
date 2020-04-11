import React, { useEffect, useReducer } from 'react';
import { useMicroUIState } from '@sackrin/react-micro-ui-hooks';
import useCompare from 'use-deep-compare-effect';
import StagesContext from './StagesContext';
import StagesState from './StagesState';
import { getDefaultStagesState } from './Helpers';
import { StagesStage } from './Types/StagesStage';
import { setStageViewedAction } from './Actions';

const { Provider } = StagesContext;

type Props = {
  component: {
    onStages?: (stages: StagesStage[], current: string) => void;
  };
  children: JSX.Element;
};

const StagesProvider = ({ component, children }: Props) => {
  // Setting up the initial state
  const [state, dispatch] = useReducer(StagesState, getDefaultStagesState());
  // Setting up the shared micro UI state
  const [shared, setShared] = useMicroUIState(state, 'STAGE');
  // Watching for changes within the current stage
  useEffect(() => {
    // Set the stage has having been viewed and determine submitted state
    dispatch(setStageViewedAction(state.current));
  }, [dispatch, state.current]);
  // Watching for changes to broadcast via shared state
  useCompare(() => {
    // Trigger the shared state update
    setShared(state);
  }, [setShared, state]);
  // Watching for changes within the stages
  useEffect(() => {
    // Extract the onStages callback
    const { onStages = (stages, current) => {} } = component;
    // Trigger on the onStages callback to let the outside know something has changed within the stages
    onStages(state.stages, state.current);
  }, [dispatch, state.stages]);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export default StagesProvider;
