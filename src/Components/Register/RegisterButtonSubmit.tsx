import React, { useContext, useCallback } from 'react';
import classnames from 'classnames';
import { Button } from '@material-ui/core';
import {
  getLastStage,
  getNextStage,
  RegisterContext,
  StagesContext,
} from '../../Context';

type Props = {
  className?: string;
};

const RegisterButtonSubmit = ({ className = '' }: Props) => {
  const { current, stages } = useContext(StagesContext);
  const registerState = useContext(RegisterContext);
  const { doSubmit } = registerState;
  const last = getLastStage(stages, current);
  const next = getNextStage(stages, current);
  const onClick = useCallback(() => {
    doSubmit();
  }, [registerState, doSubmit, next]);
  return !next && last ? (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      className={classnames('test-registerButtonSubmit', className)}
    >
      Submit
    </Button>
  ) : (
    <React.Fragment />
  );
};

export default RegisterButtonSubmit;
