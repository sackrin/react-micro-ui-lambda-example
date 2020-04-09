import React from 'react';
import classnames from 'classnames';
import ProgressStage from './ProgressStage';
import ProgressStageLabel from './ProgressStageLabel';
import { StagesStage } from '../../Context/Stages/Types/StagesStage';

type Props = {
  current: string;
  stages: StagesStage[];
  className?: string;
};

const ProgressStageReview = ({ className = '' }: Props) => (
  <ProgressStage
    isSubmitted={false}
    className={classnames('test-progressStageReview', className)}
  >
    <ProgressStageLabel>Review</ProgressStageLabel>
  </ProgressStage>
);

export default ProgressStageReview;
