import React from 'react';
import classnames from 'classnames';
import { Typography, makeStyles } from '@material-ui/core';

type Props = {
  children: any;
  className?: string;
};

type StyleClasses = () => {
  container: string;
};

export const useStyles: StyleClasses = makeStyles(() => ({
  container: {
    border: '1px #CCC solid',
    padding: '0.5rem 0.75rem 0 0.75rem',
    borderRadius: '0.5rem',
  },
}));

const FormContainer = ({ children, className = '' }: Props) => {
  const classes = useStyles();
  return (
    <Typography
      variant="h2"
      className={classnames('test-formContainer', classes.container, className)}
    >
      {children}
    </Typography>
  );
};

export default FormContainer;
