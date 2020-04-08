import { expect } from 'chai';
import setRegisterAddressAction from '../setRegisterAddressAction';

describe('Context/Register/setRegisterAddressAction', () => {
  it('can return a valid action for a provided address', () => {
    const fakeAction = setRegisterAddressAction({
      isValid: true,
      isDirty: false,
      data: {
        streetNumber: '17',
        streetName: 'Example',
        streetType: 'Street',
        suburb: 'Example Land',
        postcode: '4333',
      },
      errors: null,
    });
    expect(fakeAction).to.deep.equal({
      type: 'SET_REGISTER_ADDRESS',
      address: {
        isValid: true,
        isDirty: false,
        data: {
          streetNumber: '17',
          streetName: 'Example',
          streetType: 'Street',
          suburb: 'Example Land',
          postcode: '4333',
        },
        errors: null,
      },
    });
  });
});
