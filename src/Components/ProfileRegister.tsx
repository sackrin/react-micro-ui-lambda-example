import React from 'react';
import classnames from 'classnames';
import { withMui } from '../Helpers';
import { Typography } from '@material-ui/core';

type Props = {
  className?: string;
};

export const ProfileRegister = ({ className = '' }: Props) => (
  <div className={classnames('test-profileRegister', className)}>
    <Typography variant="h3">Profile Register</Typography>
  </div>
);

export const hasMui = withMui(ProfileRegister, 'CTM');

export default hasMui;
