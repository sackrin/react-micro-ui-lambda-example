import { expect } from 'chai';
import setStageAsSubmitted from '../setStageAsSubmitted';

const fakeStages = [
  {
    stage: 'PROFILE',
    label: 'Profile',
    isViewed: false,
    isSubmitted: false,
  },
  {
    stage: 'ADDRESS',
    label: 'Address',
    isViewed: false,
    isSubmitted: false,
  },
];

describe('Context/Stages/Helpers/setStageAsSubmitted', () => {
  it('can return the correct stages when a stage is submitted', () => {
    const _fakeStages = setStageAsSubmitted(fakeStages, 'ADDRESS');
    expect(_fakeStages).to.deep.equal([
      {
        stage: 'PROFILE',
        label: 'Profile',
        isViewed: false,
        isSubmitted: true,
      },
      {
        stage: 'ADDRESS',
        label: 'Address',
        isViewed: false,
        isSubmitted: false,
      },
    ]);
  });

  it('can return the correct stages when a stage does not exist', () => {
    const _fakeStages = setStageAsSubmitted(fakeStages, 'SOMETHING');
    expect(_fakeStages).to.deep.equal(fakeStages);
  });
});
