import React from 'react';
import classnames from 'classnames';
import { withMui } from '../Helpers';
import { RegisterForm } from './Register';
import { withProviders, RegisterProvider, StagesProvider } from '../Context';
import { StagesStage } from '../Context/Stages/Types/StagesStage';
import { RegisterProfile } from '../Context/Register/Types/RegisterProfile';
import { RegisterProfileData } from '../Context/Register/Types/RegisterProfileData';
import { RegisterAddress } from '../Context/Register/Types/RegisterAddress';
import { RegisterAddressData } from '../Context/Register/Types/RegisterAddressData';

type Props = {
  profile?: RegisterProfileData;
  address?: RegisterAddressData;
  onChange?: (
    profile: RegisterProfile,
    address: RegisterAddress,
    isValid: boolean,
    isDirty: boolean,
  ) => void;
  onRegister?: (profile: RegisterProfile, address: RegisterAddress) => void;
  onStages?: (stages: StagesStage[], current: string) => void;
  className?: string;
};

export const ProfileRegister = ({ className = '' }: Props) => (
  <div className={classnames('test-profileRegister', className)}>
    <RegisterForm />
  </div>
);

export const hasMui = withMui(ProfileRegister, 'CTM');

export const hasProviders = withProviders(hasMui, [
  RegisterProvider,
  StagesProvider,
]);

export default hasProviders;
