import { expect } from 'chai';
import setRegisterProfileAction from '../setRegisterProfileAction';

describe('Context/Register/setRegisterProfileAction', () => {
  it('can return a valid action for a provided address', () => {
    const fakeAction = setRegisterProfileAction({
      isValid: true,
      isDirty: false,
      data: {
        firstName: 'James',
        lastName: 'Exampleness',
        email: 'james.exampleness@something.com',
        phone: '03 3121 4322',
      },
      errors: [],
    });
    expect(fakeAction).to.deep.equal({
      type: 'SET_REGISTER_PROFILE',
      profile: {
        isValid: true,
        isDirty: false,
        data: {
          firstName: 'James',
          lastName: 'Exampleness',
          email: 'james.exampleness@something.com',
          phone: '03 3121 4322',
        },
        errors: [],
      },
    });
  });
});
