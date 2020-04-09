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

const ProgressStageAddress = ({ stages, className = '' }: Props) => (
  <ProgressStage
    isSubmitted={isStageSubmitted(stages, 'ADDRESS')}
    className={classnames('test-progressStageAddress', className)}
  >
    <ProgressStageLabel>Address</ProgressStageLabel>
  </ProgressStage>
);

export default ProgressStageAddress;
