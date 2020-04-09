import { expect } from 'chai';
import getNextStage from '../getNextStage';

const fakeStages = [
  {
    stage: 'PROFILE',
    label: 'Profile',
    isViewed: true,
    isSubmitted: true,
  },
  {
    stage: 'ADDRESS',
    label: 'Address',
    isViewed: false,
    isSubmitted: false,
  },
];

describe('Context/Stages/Helpers/getNextStage', () => {
  it('can return the next stage', () => {
    const fakeNextStage = getNextStage(fakeStages, 'PROFILE');
    expect(fakeNextStage).to.deep.equal({
      stage: 'ADDRESS',
      label: 'Address',
      isViewed: false,
      isSubmitted: false,
    });
  });

  it('can return undefined if no next stage', () => {
    const fakeNextStage = getNextStage(fakeStages, 'ADDRESS');
    expect(fakeNextStage).to.be.undefined;
  });
});
