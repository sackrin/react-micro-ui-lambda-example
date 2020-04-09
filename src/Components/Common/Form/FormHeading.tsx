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
    marginBottom: '1rem',
  },
}));

const FormHeading = ({ children, className = '' }: Props) => {
  const classes = useStyles();
  return (
    <Typography
      variant="h2"
      className={classnames('test-formHeading', classes.container, className)}
    >
      {children}
    </Typography>
  );
};

export default FormHeading;
