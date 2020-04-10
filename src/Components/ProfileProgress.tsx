import React from 'react';
import classnames from 'classnames';
import { withMui, getDefaultTheme } from '@sackrin/react-micro-ui-mui';
import {
  Progress,
  ProgressStageProfile,
  ProgressStageAddress,
  ProgressStageReview,
} from './Progress';
import { StagesStage } from '../Context/Stages/Types/StagesStage';

type Props = {
  current: string;
  stages: StagesStage[];
  className?: string;
};

export const ProfileProgress = ({ current, stages, className = '' }: Props) => (
  <div className={classnames('test-profileProgress', className)}>
    <Progress>
      <ProgressStageProfile current={current} stages={stages} />
      <ProgressStageAddress current={current} stages={stages} />
      <ProgressStageReview current={current} stages={stages} />
    </Progress>
  </div>
);

export const hasMui = withMui(ProfileProgress, getDefaultTheme(), 'CTM');

export default hasMui;
