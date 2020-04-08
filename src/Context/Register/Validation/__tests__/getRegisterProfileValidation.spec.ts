import { expect } from 'chai';
import getRegisterProfileValidation from '../getRegisterProfileValidation';

describe('Context/Register/Validation/getRegisterProfileValidation', () => {
  it('can return a passing validation result', () => {
    const [isValid, errors] = getRegisterProfileValidation({
      firstName: 'John',
      lastName: 'Carter',
      email: 'john.carter@example.com',
      phone: '0422 213 332',
    });
    expect(isValid).to.equal(true);
    expect(errors).to.deep.equal(null);
  });

  it('can return a failing validation result', () => {
    const [isValid, errors] = getRegisterProfileValidation({
      firstName: 'John',
      lastName: '',
      email: 'john.carter@example.com',
      phone: '0422 213 332',
    });
    expect(isValid).to.equal(false);
    expect(errors).to.deep.equal({ lastName: ['The lastName field is required.'] });
  });

  it('can return a failing email address validation result', () => {
    const [isValid, errors] = getRegisterProfileValidation({
      firstName: 'John',
      lastName: 'Carter',
      email: 'john.carter@',
      phone: '0422 213 332',
    });
    expect(isValid).to.equal(false);
    expect(errors).to.deep.equal({ email: ['The email format is invalid.'] });
  });

  it('can return a passing phone number validation result when no phone number was passed', () => {
    const [isValid, errors] = getRegisterProfileValidation({
      firstName: 'John',
      lastName: 'Carter',
      email: 'john.carter@example.com',
      phone: '',
    });
    expect(isValid).to.equal(true);
    expect(errors).to.deep.equal(null);
  });

  it('can return a failing phone number validation result', () => {
    const [isValid, errors] = getRegisterProfileValidation({
      firstName: 'John',
      lastName: 'Carter',
      email: 'john.carter@example.com',
      phone: '13 332',
    });
    expect(isValid).to.equal(false);
    expect(errors).to.deep.equal({ phone: ['The phone phone number is invalid.'] });
  });
});
