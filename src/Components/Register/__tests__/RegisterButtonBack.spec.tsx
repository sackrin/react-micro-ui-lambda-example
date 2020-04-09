import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { createMount } from '@material-ui/core/test-utils';
import { setStagesCurrentAction, StagesContext } from '../../../Context/Stages';
import RegisterButtonBack from '../RegisterButtonBack';

describe('Register/RegisterButtonBack', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  const wrapContexts = (state, children) => (
    <StagesContext.Provider value={state}>{children}</StagesContext.Provider>
  );

  it('can render a register back button', () => {
    const fakeDoSubmit = sinon.spy();
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
    ];
    const fakeButton = mount(
      wrapContexts(
        {
          current: 'ADDRESS',
          stages: fakeStages,
          doSubmit: fakeDoSubmit,
          dispatch: fakeDispatch,
        },
        <RegisterButtonBack />,
      ),
    );
    expect(fakeButton).to.have.length(1);
    expect(fakeButton.find('ForwardRef(Button)')).to.have.length(1);
  });

  it('can trigger the correct dispatch to navigate back a step', () => {
    const fakeDoSubmit = sinon.spy();
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
    ];
    const fakeButton = mount(
      wrapContexts(
        {
          current: 'ADDRESS',
          stages: fakeStages,
          doSubmit: fakeDoSubmit,
          dispatch: fakeDispatch,
        },
        <RegisterButtonBack />,
      ),
    );
    fakeButton.find('ForwardRef(Button)').simulate('click');
    expect(fakeDispatch).to.have.been.called;
    expect(fakeDispatch).to.have.been.calledWith(
      setStagesCurrentAction('PROFILE'),
    );
  });

  it('can not render a register back button', () => {
    const fakeDoSubmit = sinon.spy();
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
    ];
    const fakeButton = mount(
      wrapContexts(
        {
          current: 'PROFILE',
          stages: fakeStages,
          doSubmit: fakeDoSubmit,
          dispatch: fakeDispatch,
        },
        <RegisterButtonBack />,
      ),
    );
    expect(fakeButton).to.have.length(1);
    expect(fakeButton.find('ForwardRef(Button)')).to.have.length(0);
  });
});
