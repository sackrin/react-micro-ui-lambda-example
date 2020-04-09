import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import RegisterFormProfile from '../RegisterFormProfile';
import { createMount } from '@material-ui/core/test-utils';
import { getDefaultRegisterState, RegisterContext } from '../../../Context';

describe('Register/RegisterFormProfile', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

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

  const wrapContexts = (state, children) => (
    <RegisterContext.Provider value={state}>
      {children}
    </RegisterContext.Provider>
  );

  it('can render a register profile form', () => {
    const fakeDoSubmit = sinon.spy();
    const fakeDispatch = sinon.spy();
    const fakeForm = mount(
      wrapContexts(
        {
          ...getDefaultRegisterState(),
          profile: { ...fakeProfile },
          address: { ...fakeAddress },
          submit: fakeDoSubmit,
          dispatch: fakeDispatch,
        },
        <RegisterFormProfile />,
      ),
    );
    expect(fakeForm).to.have.length(1);
    expect(
      fakeForm.find({ label: 'First Name' }).find('ForwardRef(TextField)'),
    ).to.have.length(1);
    expect(
      fakeForm.find({ label: 'Last Name' }).find('ForwardRef(TextField)'),
    ).to.have.length(1);
    expect(
      fakeForm.find({ label: 'Email Address' }).find('ForwardRef(TextField)'),
    ).to.have.length(1);
    expect(
      fakeForm.find({ label: 'Phone Number' }).find('ForwardRef(TextField)'),
    ).to.have.length(1);
  });
});
