import { expect } from 'chai';
import setRegisterIsDirtyAction from '../setRegisterIsDirtyAction';

describe('Context/Register/Actions/setRegisterIsDirtyAction', () => {
  it('can return a properly formatted action', () => {
    const fakeAction = setRegisterIsDirtyAction('address', true);
    expect(fakeAction).to.deep.equal({
      type: 'SET_REGISTER_ISDIRTY',
      property: 'address',
      isDirty: true,
    });
  });
});
