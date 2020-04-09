import { expect } from 'chai';
import isStageSubmitted from '../isStageSubmitted';

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

describe('Context/Stages/Helpers/isStageSubmitted', () => {
  it('can return true when a stage is submitted', () => {
    const fakeIsSubmitted = isStageSubmitted(fakeStages, 'PROFILE');
    expect(fakeIsSubmitted).to.equal(true);
  });

  it('can return false when a stage is not yet submitted', () => {
    const fakeIsSubmitted = isStageSubmitted(fakeStages, 'ADDRESS');
    expect(fakeIsSubmitted).to.equal(false);
  });

  it('can return false when a stage does not exist', () => {
    const fakeIsSubmitted = isStageSubmitted(fakeStages, 'SOMETHING');
    expect(fakeIsSubmitted).to.equal(false);
  });
});
