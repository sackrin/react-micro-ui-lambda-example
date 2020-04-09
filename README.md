# Compare the market form

```js
import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core';

type Props = {
  children: any;
  className?: string;
};

type StyleClasses = () => {};

export const useStyles: StyleClasses = makeStyles(() => ({}));

const Example = ({ children, className = '' }: Props) => {
  const classes = useStyles();
  return (
    <div className={classnames('test-example', className)}>{children}</div>
  );
};

export default Example;

```
