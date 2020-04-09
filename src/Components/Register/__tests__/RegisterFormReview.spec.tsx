import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import RegisterFormReview from '../RegisterFormReview';
import { createMount } from '@material-ui/core/test-utils';
import { getDefaultRegisterState, RegisterContext } from '../../../Context';

describe('Register/RegisterFormReview', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  const fakeProfile = {
    isValid: false,
    isDirty: false,
    data: {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@example.com',
      phone: '0734452221',
    },
    errors: null,
  };

  const fakeAddress = {
    isValid: false,
    isDirty: false,
    data: {
      streetNumber: '56',
      streetName: 'Something',
      streetType: 'St',
      suburb: 'Exampleville',
      postcode: '4556',
    },
    errors: null,
  };

  const wrapContexts = (state, children) => (
    <RegisterContext.Provider value={state}>
      {children}
    </RegisterContext.Provider>
  );

  it('can render a register review form', () => {
    const fakeDoSubmit = sinon.spy();
    const fakeDispatch = sinon.spy();
    const fakeReview = mount(
      wrapContexts(
        {
          ...getDefaultRegisterState(),
          profile: { ...fakeProfile },
          address: { ...fakeAddress },
          submit: fakeDoSubmit,
          dispatch: fakeDispatch,
        },
        <RegisterFormReview />,
      ),
    );
    expect(fakeReview).to.have.length(1);
    expect(
      fakeReview.find('[label="First Name"]').find('SimpleValue'),
    ).to.have.length(1);
    expect(
      fakeReview
        .find('[label="First Name"]')
        .find('SimpleValue')
        .find('.test-simpleValueText p')
        .text(),
    ).to.equal('John');
    expect(
      fakeReview.find('[label="Last Name"]').find('SimpleValue'),
    ).to.have.length(1);
    expect(
      fakeReview
        .find('[label="Last Name"]')
        .find('SimpleValue')
        .find('.test-simpleValueText p')
        .text(),
    ).to.equal('Smith');
    expect(
      fakeReview.find('[label="Email Address"]').find('SimpleValue'),
    ).to.have.length(1);
    expect(
      fakeReview
        .find('[label="Email Address"]')
        .find('SimpleValue')
        .find('.test-simpleValueText p')
        .text(),
    ).to.equal('john.smith@example.com');
    expect(
      fakeReview.find('[label="Phone Number"]').find('SimpleValue'),
    ).to.have.length(1);
    expect(
      fakeReview
        .find('[label="Phone Number"]')
        .find('SimpleValue')
        .find('.test-simpleValueText p')
        .text(),
    ).to.equal('0734452221');
    expect(
      fakeReview.find('[label="Street Number"]').find('SimpleValue'),
    ).to.have.length(1);
    expect(
      fakeReview
        .find('[label="Street Number"]')
        .find('SimpleValue')
        .find('.test-simpleValueText p')
        .text(),
    ).to.equal('56');
    expect(
      fakeReview.find('[label="Street Name"]').find('SimpleValue'),
    ).to.have.length(1);
    expect(
      fakeReview
        .find('[label="Street Name"]')
        .find('SimpleValue')
        .find('.test-simpleValueText p')
        .text(),
    ).to.equal('Something');
    expect(
      fakeReview.find('[label="Street Type"]').find('SimpleValue'),
    ).to.have.length(1);
    expect(
      fakeReview
        .find('[label="Street Type"]')
        .find('SimpleValue')
        .find('.test-simpleValueText p')
        .text(),
    ).to.equal('St');
    expect(
      fakeReview.find('[label="Suburb"]').find('SimpleValue'),
    ).to.have.length(1);
    expect(
      fakeReview
        .find('[label="Suburb"]')
        .find('SimpleValue')
        .find('.test-simpleValueText p')
        .text(),
    ).to.equal('Exampleville');
    expect(
      fakeReview.find('[label="Postcode"]').find('SimpleValue'),
    ).to.have.length(1);
    expect(
      fakeReview
        .find('[label="Postcode"]')
        .find('SimpleValue')
        .find('.test-simpleValueText p')
        .text(),
    ).to.equal('4556');
  });
});
