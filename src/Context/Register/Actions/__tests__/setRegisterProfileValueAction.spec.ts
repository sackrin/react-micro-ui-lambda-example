import { expect } from 'chai';
import setRegisterProfileValueAction from "../setRegisterProfileValueAction";

describe('Context/Register/Actions/setRegisterProfileValueAction', () => {
  it ('can return a properly formatted action', () => {
    const fakeAction = setRegisterProfileValueAction('firstName', 'Ryan');
    expect(fakeAction).to.deep.equal({
      type: 'SET_REGISTER_PROFILE_VALUE',
      property: 'firstName',
      value: 'Ryan',
    });
  });
});
