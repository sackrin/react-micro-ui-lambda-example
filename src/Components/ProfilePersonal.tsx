import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string;
};

const ProfilePersonal = ({ className = '' }: Props) => <div className={classnames(className)}>Profile Personal</div>;

export default ProfilePersonal;
