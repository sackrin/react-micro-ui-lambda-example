import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import RegisterForm from '../RegisterForm';
import { createMount } from '@material-ui/core/test-utils';
import { StagesContext } from '../../../Context/Stages';

describe('Register/RegisterForm', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  const wrapContexts = (state, children) => (
    <StagesContext.Provider value={state}>{children}</StagesContext.Provider>
  );

  it('can render a register form', () => {
    const fakeDispatch = sinon.spy();
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
      {
        stage: 'REVIEW',
        label: 'Review',
        isViewed: false,
        isSubmitted: false,
      },
    ];
    const fakeForm = mount(
      wrapContexts(
        {
          current: 'PROFILE',
          stages: fakeStages,
          dispatch: fakeDispatch,
        },
        <RegisterForm />,
      ),
    );
    expect(fakeForm).to.have.length(1);
    expect(fakeForm.find('RegisterFormProfile')).to.have.length(1);
    expect(fakeForm.find('RegisterButtonBack WithStyles(ForwardRef(Button))')).to.have.length(0);
    expect(fakeForm.find('RegisterButtonSubmit WithStyles(ForwardRef(Button))')).to.have.length(0);
    expect(fakeForm.find('RegisterButtonContinue WithStyles(ForwardRef(Button))')).to.have.length(1);
  });

  it('can render a register form with address fields', () => {
    const fakeDispatch = sinon.spy();
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
      {
        stage: 'REVIEW',
        label: 'Review',
        isViewed: false,
        isSubmitted: false,
      },
    ];
    const fakeForm = mount(
      wrapContexts(
        {
          current: 'ADDRESS',
          stages: fakeStages,
          dispatch: fakeDispatch,
        },
        <RegisterForm />,
      ),
    );
    expect(fakeForm).to.have.length(1);
    expect(fakeForm.find('RegisterFormAddress')).to.have.length(1);
    expect(fakeForm.find('RegisterButtonBack WithStyles(ForwardRef(Button))')).to.have.length(1);
    expect(fakeForm.find('RegisterButtonContinue WithStyles(ForwardRef(Button))')).to.have.length(1);
    expect(fakeForm.find('RegisterButtonSubmit WithStyles(ForwardRef(Button))')).to.have.length(0);
  });

  it('can render a register form with review fields', () => {
    const fakeDispatch = sinon.spy();
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
      {
        stage: 'REVIEW',
        label: 'Review',
        isViewed: false,
        isSubmitted: false,
      },
    ];
    const fakeForm = mount(
      wrapContexts(
        {
          current: 'REVIEW',
          stages: fakeStages,
          dispatch: fakeDispatch,
        },
        <RegisterForm />,
      ),
    );
    expect(fakeForm).to.have.length(1);
    expect(fakeForm.find('RegisterFormReview')).to.have.length(1);
    expect(fakeForm.find('RegisterButtonBack WithStyles(ForwardRef(Button))')).to.have.length(1);
    expect(fakeForm.find('RegisterButtonContinue WithStyles(ForwardRef(Button))')).to.have.length(0);
    expect(fakeForm.find('RegisterButtonSubmit WithStyles(ForwardRef(Button))')).to.have.length(1);
  });
});
