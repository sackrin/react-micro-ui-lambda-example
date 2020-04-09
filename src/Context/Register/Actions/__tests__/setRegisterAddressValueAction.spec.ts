import { expect } from 'chai';
import setRegisterAddressValueAction from "../setRegisterAddressValueAction";

describe('Context/Register/Actions/setRegisterAddressValueAction', () => {
  it ('can return a properly formatted action', () => {
    const fakeAction = setRegisterAddressValueAction('streetName', 'James');
    expect(fakeAction).to.deep.equal({
      type: 'SET_REGISTER_ADDRESS_VALUE',
      property: 'streetName',
      value: 'James',
    });
  });
});
