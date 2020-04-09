import { expect } from 'chai';
import setStageAsViewed from '../setStageAsViewed';

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

describe('Context/Stages/Helpers/setStageAsViewed', () => {
  it('can return the correct stages when a stage is viewed', () => {
    const _fakeStages = setStageAsViewed(fakeStages, 'PROFILE');
    expect(_fakeStages).to.deep.equal([
      {
        stage: 'PROFILE',
        label: 'Profile',
        isViewed: true,
        isSubmitted: false,
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
    const _fakeStages = setStageAsViewed(fakeStages, 'SOMETHING');
    expect(_fakeStages).to.deep.equal(fakeStages);
  });
});
