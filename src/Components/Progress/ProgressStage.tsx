import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core';

type Props = {
  children: any;
  isSubmitted: boolean;
  className?: string;
};

type StyleClasses = () => {
  container: string;
  submitted: string;
};

export const useStyles: StyleClasses = makeStyles(() => ({
  container: {
    position: 'relative',
    height: '.8rem',
    flexGrow: 1,
  },
  submitted: {
    backgroundColor: '#CCC',
  },
}));

const ProgressStage = ({ isSubmitted, children, className = '' }: Props) => {
  const classes = useStyles();
  return (
    <div
      className={classnames(
        'test-progressStage',
        classes.container,
        isSubmitted && classes.submitted,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ProgressStage;
