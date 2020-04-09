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
    fontSize: '1.2rem',
  },
}));

const SimpleValue = ({ label, children, className = '' }: Props) => {
  const classes = useStyles();
  return (
    <div
      data-simple-value={label}
      className={classnames('test-simpleValue', classes.container, className)}
    >
      <Typography variant="caption" className="test-simpleValueLabel">
        {label}
      </Typography>
      <Typography className={classnames('test-simpleValueText', classes.value)}>
        {children || '-'}
      </Typography>
    </div>
  );
};

export default SimpleValue;
