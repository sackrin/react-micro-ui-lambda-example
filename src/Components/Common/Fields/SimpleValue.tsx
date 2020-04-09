import React from 'react';
import classnames from 'classnames';
import { makeStyles, Typography } from '@material-ui/core';

type Props = {
  label: string;
  children: any;
  className?: string;
};

type StyleClasses = () => {
  container: string;
  value: string;
};

export const useStyles: StyleClasses = makeStyles(() => ({
  container: {
    marginBottom: '1rem',
  },
  value: {
    fontSize: '1.2rem'
  }
}));

const SimpleValue = ({ label, children, className = '' }: Props) => {
  const classes = useStyles();
  return (
    <div
      className={classnames('test-simpleValue', classes.container, className)}
    >
      <Typography variant="caption">{label}</Typography>
      <Typography className={classes.value}>{children}</Typography>
    </div>
  );
};

export default SimpleValue;
