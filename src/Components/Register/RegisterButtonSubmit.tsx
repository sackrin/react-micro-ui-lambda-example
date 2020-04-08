import React, { useContext, useCallback } from 'react';
import classnames from 'classnames';
import { Button } from '@material-ui/core';
import {
  getLastStage,
  getNextStage,
  getRegisterStateByStage,
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
  const data = getRegisterStateByStage(registerState, current);
  const last = getLastStage(stages, current);
  const next = getNextStage(stages, current);
  const onClick = useCallback(() => {
    if (data && data.isValid) {
      doSubmit();
    }
  }, [data, doSubmit, next]);
  return next && next.stage === 'REVIEW' && last ? (
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
