import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string;
};

const ProfileAddress = ({ className = '' }: Props) => <div className={classnames(className)}>Profile Address</div>;

export default ProfileAddress;
