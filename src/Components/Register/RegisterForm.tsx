import React, { useContext } from 'react';
import classnames from 'classnames';
import { StagesContext } from '../../Context/Stages';
import RegisterFormProfile from './RegisterFormProfile';
import RegisterFormAddress from './RegisterFormAddress';
import RegisterButtonSubmit from './RegisterButtonSubmit';
import RegisterButtonContinue from './RegisterButtonContinue';
import RegisterButtonBack from './RegisterButtonBack';
import { makeStyles } from '@material-ui/core';

type Props = {
  className?: string;
};

type StyleClasses = () => {
  actions: string;
  actionsInner: string;
  backButton: string;
};

export const useStyles: StyleClasses = makeStyles(() => ({
  actions: {
    display: 'flex',
    marginTop: '2rem',
  },
  actionsInner: {
    marginLeft: 'auto',
  },
  backButton: {
    marginRight: '.5rem',
  },
}));

const RegisterForm = ({ className = '' }: Props) => {
  const { current } = useContext(StagesContext);
  const classes = useStyles();
  return (
    <div className={classnames('test-registerForm', className)}>
      <div className="test-registerFormFields">
        {current === 'PROFILE' && <RegisterFormProfile />}
        {current === 'ADDRESS' && <RegisterFormAddress />}
      </div>
      <div className={classnames('test-registerFormActions', classes.actions)}>
        <div className={classes.actionsInner}>
          <RegisterButtonBack className={classes.backButton} />
          <RegisterButtonContinue />
          <RegisterButtonSubmit />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
