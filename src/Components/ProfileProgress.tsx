import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string;
};

const ProfileProgress = ({ className = '' }: Props) => <div className={classnames(className)}>Profile Progress</div>;

export default ProfileProgress;
