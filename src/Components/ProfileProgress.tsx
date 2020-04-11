import React from 'react';
import classnames from 'classnames';
import { useMicroUIState } from '@sackrin/react-micro-ui-hooks';
import { withMui, getDefaultTheme } from '@sackrin/react-micro-ui-mui';
import {
  Progress,
  ProgressStageProfile,
  ProgressStageAddress,
  ProgressStageReview,
} from './Progress';

type Props = {
  className?: string;
};

export const ProfileProgress = ({ className = '' }: Props) => {
  // Setting up the shared micro UI state
  const [{ current, stages }] = useMicroUIState({}, 'STAGE');
  // Only return the component if a current stage exists along with stages
  return current && stages ? (
    <div className={classnames('test-profileProgress', className)}>
      <Progress>
        <ProgressStageProfile current={current} stages={stages} />
        <ProgressStageAddress current={current} stages={stages} />
        <ProgressStageReview current={current} stages={stages} />
      </Progress>
    </div>
  ) : (
    <React.Fragment />
  );
};

export const hasMui = withMui(ProfileProgress, getDefaultTheme(), 'CTM');

export default hasMui;
