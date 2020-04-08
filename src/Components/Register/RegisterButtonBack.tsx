import React, { useCallback, useContext } from 'react';
import classnames from 'classnames';
import { Button } from '@material-ui/core';
import {
  getLastStage,
  setStagesCurrentAction,
  StagesContext,
} from '../../Context';

type Props = {
  className?: string;
};

const RegisterButtonBack = ({ className = '' }: Props) => {
  const { dispatch, current, stages } = useContext(StagesContext);
  const last = getLastStage(stages, current);
  const onClick = useCallback(() => {
    if (last && last.stage) {
      dispatch(setStagesCurrentAction(last.stage));
    }
  }, [dispatch, last]);
  return last ? (
    <Button
      variant="contained"
      color="secondary"
      onClick={onClick}
      className={classnames('test-registerButtonBack', className)}
    >
      Back
    </Button>
  ) : (
    <React.Fragment />
  );
};

export default RegisterButtonBack;
