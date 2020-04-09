import { expect } from 'chai';
import getLastStage from '../getLastStage';

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

describe('Context/Stages/Helpers/getLastStage', () => {
  it('can return the last stage', () => {
    const fakeLastStage = getLastStage(fakeStages, 'ADDRESS');
    expect(fakeLastStage).to.deep.equal({
      stage: 'PROFILE',
      label: 'Profile',
      isViewed: true,
      isSubmitted: true,
    });
  });

  it('can return undefined if no last stage', () => {
    const fakeLastStage = getLastStage(fakeStages, 'PROFILE');
    expect(fakeLastStage).to.be.undefined;
  });
});
