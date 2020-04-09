import { expect } from 'chai';
import getRegisterStateByStage from "../getRegisterStateByStage";
import getDefaultRegisterState from "../getDefaultRegisterState";

describe('Context/Register/Helpers/getRegisterStateByStage', () => {

  it('can return the correct stage for profile', () => {
    const fakeState = getDefaultRegisterState();
    const fakeByState = getRegisterStateByStage(fakeState, 'PROFILE');
    expect(fakeByState).to.deep.equal(fakeState.profile);
  });

  it('can return the correct stage for address', () => {
    const fakeState = getDefaultRegisterState();
    const fakeByState = getRegisterStateByStage(fakeState, 'ADDRESS');
    expect(fakeByState).to.deep.equal(fakeState.address);
  });

  it('can return undefined if no state exists', () => {
    const fakeState = getDefaultRegisterState();
    const fakeByState = getRegisterStateByStage(fakeState, 'SOMETHING');
    expect(fakeByState).to.be.undefined;
  });
});
