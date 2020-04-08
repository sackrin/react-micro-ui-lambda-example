import { expect } from 'chai';
import getRegisterAddressValidation from '../getRegisterAddressValidation';

describe('Context/Register/Validation/getRegisterAddressValidation', () => {
  it('can return a passing validation result', () => {
    const [isValid, errors] = getRegisterAddressValidation({
      streetNumber: '47',
      streetName: 'Dan',
      streetType: 'St',
      suburb: 'Graceville',
      postcode: '4300'
    });
    expect(isValid).to.equal(true);
    expect(errors).to.deep.equal(null);
  });

  it('can return a failing validation result for an incorrect street number', () => {
    const [isValid, errors] = getRegisterAddressValidation({
      streetNumber: '47s',
      streetName: 'Dan',
      streetType: 'St',
      suburb: 'Graceville',
      postcode: '4300'
    });
    expect(isValid).to.equal(false);
    expect(errors).to.deep.equal({"streetNumber": ["The streetNumber must be a number."]});
  });

  it('can return a failing validation result for an incorrect street type', () => {
    const [isValid, errors] = getRegisterAddressValidation({
      streetNumber: '47',
      streetName: 'Dan',
      streetType: 'Rt',
      suburb: 'Graceville',
      postcode: '4300'
    });
    expect(isValid).to.equal(false);
    expect(errors).to.deep.equal({"streetType": ["The selected streetType is invalid."]});
  });

  it('can return a failing validation result for an postcode of too higher number', () => {
    const [isValid, errors] = getRegisterAddressValidation({
      streetNumber: '47',
      streetName: 'Dan',
      streetType: 'St',
      suburb: 'Graceville',
      postcode: '9999'
    });
    expect(isValid).to.equal(false);
    expect(errors).to.deep.equal({"postcode": ["The postcode field must be between 800 and 8000."]});
  });

  it('can return a failing validation result for an postcode of too lower number', () => {
    const [isValid, errors] = getRegisterAddressValidation({
      streetNumber: '47',
      streetName: 'Dan',
      streetType: 'St',
      suburb: 'Graceville',
      postcode: '33'
    });
    expect(isValid).to.equal(false);
    expect(errors).to.deep.equal({"postcode": ["The postcode field must be between 800 and 8000."]});
  });
});
