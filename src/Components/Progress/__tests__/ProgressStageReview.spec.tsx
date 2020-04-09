import React from 'react';
import { expect } from 'chai';
import ProgressStageReview from '../ProgressStageReview';
import { createShallow } from '@material-ui/core/test-utils';

describe('Progress/ProgressStageReview', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('can render a profile progress stage with provided options', () => {
    const fakeCurrent = 'PROFILE';
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
        isViewed: true,
        isSubmitted: true,
      },
      { stage: 'REVIEW', label: 'Review', isViewed: true, isSubmitted: false },
    ];
    const fakeField = shallow(
      <ProgressStageReview
        current={fakeCurrent}
        stages={fakeStages}
        className="exampleClassName"
      />,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.prop('isSubmitted')).to.equal(false);
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });
});
