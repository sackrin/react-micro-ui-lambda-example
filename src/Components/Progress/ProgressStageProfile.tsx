import React from 'react';
import classnames from 'classnames';
import ProgressStage from './ProgressStage';
import ProgressStageLabel from './ProgressStageLabel';
import { isStageSubmitted } from '../../Context';
import { StagesStage } from '../../Context/Stages/Types/StagesStage';

type Props = {
  current: string;
  stages: StagesStage[];
  className?: string;
};

const ProgressStageProfile = ({ stages, className = '' }: Props) => (
  <ProgressStage
    isSubmitted={isStageSubmitted(stages, 'PROFILE')}
    className={classnames('test-progressStageProfile', className)}
  >
    <ProgressStageLabel>Profile</ProgressStageLabel>
  </ProgressStage>
);

export default ProgressStageProfile;
