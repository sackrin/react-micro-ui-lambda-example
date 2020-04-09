import React, { useContext, useCallback } from 'react';
import classnames from 'classnames';
import { Button } from '@material-ui/core';
import {
  getNextStage,
  getRegisterStateByStage,
  RegisterContext,
  setRegisterIsDirtyAction,
  setStagesCurrentAction,
  StagesContext,
} from '../../Context';

type Props = {
  className?: string;
};

const RegisterButtonContinue = ({ className = '' }: Props) => {
  const { dispatch, current, stages } = useContext(StagesContext);
  const registerState = useContext(RegisterContext);
  const data = getRegisterStateByStage(registerState, current);
  const next = getNextStage(stages, current);
  const onClick = useCallback(() => {
    if (data && data.isValid && next && next.stage) {
      dispatch(setStagesCurrentAction(next.stage));
      registerState.dispatch(
        setRegisterIsDirtyAction(current.toLowerCase(), true),
      );
    } else if (data) {
      registerState.dispatch(
        setRegisterIsDirtyAction(current.toLowerCase(), true),
      );
    }
  }, [registerState, dispatch, data, next]);
  return next ? (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      className={classnames('test-registerButtonContinue', className)}
    >
      Continue
    </Button>
  ) : (
    <React.Fragment />
  );
};

export default RegisterButtonContinue;
