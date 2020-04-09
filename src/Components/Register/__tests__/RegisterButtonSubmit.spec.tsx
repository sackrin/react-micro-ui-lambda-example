import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { createMount } from '@material-ui/core/test-utils';
import {
  StagesContext,
  RegisterContext,
  getDefaultRegisterState,
  getDefaultStagesState,
} from '../../../Context';
import RegisterButtonSubmit from '../RegisterButtonSubmit';

describe('Register/RegisterButtonSubmit', () => {
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

  it('can render a register submit button', () => {
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
        <RegisterButtonSubmit />,
      ),
    );
    expect(fakeButton).to.have.length(1);
    expect(fakeButton.find('ForwardRef(Button)')).to.have.length(1);
  });

  it('can simulate clicking the submit button', () => {
    const fakeDoSubmit = sinon.spy();
    const fakeStagesDispatch = sinon.spy();
    const fakeRegisterDispatch = sinon.spy();
    const fakeButton = mount(
      wrapContexts(
        {
          ...getDefaultStagesState(),
          current: 'ADDRESS',
          stages: fakeStages,
          dispatch: fakeStagesDispatch,
        },
        {
          ...getDefaultRegisterState(),
          profile: { ...fakeProfile },
          address: { ...fakeAddress },
          doSubmit: fakeDoSubmit,
          dispatch: fakeRegisterDispatch,
        },
        <RegisterButtonSubmit />,
      ),
    );
    fakeButton.find('ForwardRef(Button)').simulate('click');
    expect(fakeDoSubmit).to.have.been.called;
  });

  it('can not render a register submit button', () => {
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
        <RegisterButtonSubmit />,
      ),
    );
    expect(fakeButton).to.have.length(1);
    expect(fakeButton.find('ForwardRef(Button)')).to.have.length(0);
  });
});
