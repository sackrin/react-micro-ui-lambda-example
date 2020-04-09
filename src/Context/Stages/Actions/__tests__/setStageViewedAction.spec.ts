import { expect } from 'chai';
import setStageViewedAction from '../setStageViewedAction';

describe('Context/Stages/Actions/setStageViewedAction', () => {
  it('can output a correctly formatted action', () => {
    const fakeAction = setStageViewedAction('PROFILE');
    expect(fakeAction).to.deep.equal({
      type: 'SET_STAGES_STAGE_VIEWED',
      stage: 'PROFILE',
    });
  });
});
