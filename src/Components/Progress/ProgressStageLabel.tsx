import React from 'react';
import classnames from 'classnames';
import { Typography, makeStyles } from '@material-ui/core';

type Props = {
  children: any;
  className?: string;
};

type StyleClasses = () => {
  label: string;
  labelActive: string;
};

export const useStyles: StyleClasses = makeStyles(() => ({
  label: {
    position: 'absolute',
    bottom: '-1.2rem',
    right: 0,
  },
  labelActive: {
    opacity: '0.7',
  },
}));

const ProgressStageLabel = ({ children, className = '' }: Props) => {
  const classes = useStyles();
  return (
    <Typography
      className={classnames(
        'test-progressStageLabel',
        classes.label,
        classes.labelActive,
        className,
      )}
    >
      {children}
    </Typography>
  );
};

export default ProgressStageLabel;
