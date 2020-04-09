import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { createMount } from '@material-ui/core/test-utils';
import {
  StagesContext,
  RegisterContext,
  getDefaultRegisterState,
  getDefaultStagesState,
  setStagesCurrentAction,
  setRegisterIsDirtyAction,
} from '../../../Context';
import RegisterButtonContinue from '../RegisterButtonContinue';

describe('Register/RegisterButtonContinue', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  const wrapContexts = (stagesState, registerState, children) => (
    <StagesContext.Provider value={stagesState}>
      <RegisterContext.Provider value={registerState}>
        {children}
      </RegisterContext.Provider>
    </StagesContext.Provider>
  );

  const fakeStages = [
    {
      stage: 'PROFILE',
      label: 'Profile',
      isViewed: true,
      isSubmitted: true,
    },
    {
      stage: 'ADDRESS',
      label: 'Address',
      isViewed: false,
      isSubmitted: false,
    },
  ];

  const fakeProfile = {
    isValid: false,
    isDirty: false,
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    errors: null,
  };

  const fakeAddress = {
    isValid: false,
    isDirty: false,
    data: {
      streetNumber: '',
      streetName: '',
      streetType: '',
      suburb: '',
      postcode: '',
    },
    errors: null,
  };

  it('can render a register continue button', () => {
    const fakeDoSubmit = sinon.spy();
    const fakeStagesDispatch = sinon.spy();
    const fakeRegisterDispatch = sinon.spy();
    const fakeButton = mount(
      wrapContexts(
        {
          ...getDefaultStagesState(),
          current: 'PROFILE',
          stages: fakeStages,
          doSubmit: fakeDoSubmit,
          dispatch: fakeStagesDispatch,
        },
        {
          ...getDefaultRegisterState(),
          profile: { ...fakeProfile },
          address: { ...fakeAddress },
          dispatch: fakeRegisterDispatch,
        },
        <RegisterButtonContinue />,
      ),
    );
    expect(fakeButton).to.have.length(1);
    expect(fakeButton.find('ForwardRef(Button)')).to.have.length(1);
  });

  it('can correct respond to a valid step continue click', () => {
    const fakeDoSubmit = sinon.spy();
    const fakeStagesDispatch = sinon.spy();
    const fakeRegisterDispatch = sinon.spy();
    const fakeButton = mount(
      wrapContexts(
        {
          ...getDefaultStagesState(),
          current: 'PROFILE',
          stages: fakeStages,
          doSubmit: fakeDoSubmit,
          dispatch: fakeStagesDispatch,
        },
        {
          ...getDefaultRegisterState(),
          profile: { ...fakeProfile, isValid: true },
          address: { ...fakeAddress },
          dispatch: fakeRegisterDispatch,
        },
        <RegisterButtonContinue />,
      ),
    );
    fakeButton.find('ForwardRef(Button)').simulate('click');
    expect(fakeStagesDispatch).to.have.been.called;
    expect(fakeStagesDispatch).to.have.been.calledWith(
      setStagesCurrentAction('ADDRESS'),
    );
    expect(fakeRegisterDispatch).to.have.been.called;
    expect(fakeRegisterDispatch).to.have.been.calledWith(
      setRegisterIsDirtyAction('profile', true),
    );
  });

  it('can correct respond to a invalid step continue click', () => {
    const fakeDoSubmit = sinon.spy();
    const fakeStagesDispatch = sinon.spy();
    const fakeRegisterDispatch = sinon.spy();
    const fakeButton = mount(
      wrapContexts(
        {
          ...getDefaultStagesState(),
          current: 'PROFILE',
          stages: fakeStages,
          doSubmit: fakeDoSubmit,
          dispatch: fakeStagesDispatch,
        },
        {
          ...getDefaultRegisterState(),
          profile: { ...fakeProfile, isValid: false },
          address: { ...fakeAddress },
          dispatch: fakeRegisterDispatch,
        },
        <RegisterButtonContinue />,
      ),
    );
    fakeButton.find('ForwardRef(Button)').simulate('click');
    expect(fakeStagesDispatch).to.have.not.been.called;
    expect(fakeRegisterDispatch).to.have.been.called;
    expect(fakeRegisterDispatch).to.have.been.calledWith(
      setRegisterIsDirtyAction('profile', true),
    );
  });

  it('can not render a register continue button', () => {
    const fakeDoSubmit = sinon.spy();
    const fakeStagesDispatch = sinon.spy();
    const fakeRegisterDispatch = sinon.spy();
    const fakeButton = mount(
      wrapContexts(
        {
          ...getDefaultStagesState(),
          current: 'ADDRESS',
          stages: fakeStages,
          doSubmit: fakeDoSubmit,
          dispatch: fakeStagesDispatch,
        },
        {
          ...getDefaultRegisterState(),
          profile: { ...fakeProfile },
          address: { ...fakeAddress },
          dispatch: fakeRegisterDispatch,
        },
        <RegisterButtonContinue />,
      ),
    );
    expect(fakeButton).to.have.length(1);
    expect(fakeButton.find('ForwardRef(Button)')).to.have.length(0);
  });
});
