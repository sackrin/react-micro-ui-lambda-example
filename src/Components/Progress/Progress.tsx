import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core';

type Props = {
  children: any;
  className?: string;
};

type StyleClasses = () => {
  container: string;
};

export const useStyles: StyleClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    background: '#EEE',
    borderLeft: '15px #CCC solid',
  },
}));

const Progress = ({ children, className = '' }: Props) => {
  const classes = useStyles();
  return (
    <div className={classnames('test-progress', classes.container, className)}>
      {children}
    </div>
  );
};

export default Progress;
