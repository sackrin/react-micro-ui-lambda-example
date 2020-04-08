import { expect } from 'chai';
import setRegisterIsValidAction from '../setRegisterIsValidAction';

describe('Context/Register/setRegisterIsValidAction', () => {
  it('can return a valid action for a provided address', () => {
    const fakeAction = setRegisterIsValidAction(false);
    expect(fakeAction).to.deep.equal({ type: 'SET_REGISTER_ISVALID', isValid: false });
  });
});
