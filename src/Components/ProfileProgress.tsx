import React from 'react';
import classnames from 'classnames';
import { withMui } from '../Helpers';
import { Typography } from '@material-ui/core';

type Props = {
  className?: string;
};

export const ProfileProgress = ({ className = '' }: Props) => (
  <div className={classnames('test-profileProgress', className)}>
    <Typography variant="h3">Profile Progress</Typography>
  </div>
);

export const hasMui = withMui(ProfileProgress, 'CTM');

export default ProfileProgress;
