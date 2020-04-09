import { expect } from 'chai';
import setStagesCurrentAction from '../setStagesCurrentAction';

describe('Context/Stages/Actions/setStagesCurrentAction', () => {
  it('can output a correctly formatted action', () => {
    const fakeAction = setStagesCurrentAction('PROFILE');
    expect(fakeAction).to.deep.equal({
      type: 'SET_STAGES_CURRENT',
      current: 'PROFILE',
    });
  });
});
