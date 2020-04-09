import React from 'react';
import { expect } from 'chai';
import ProgressStageProfile from '../ProgressStageProfile';
import { createShallow } from '@material-ui/core/test-utils';

describe('Progress/ProgressStageProfile', () => {
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
        isViewed: false,
        isSubmitted: false,
      },
      {
        stage: 'ADDRESS',
        label: 'Address',
        isViewed: false,
        isSubmitted: false,
      },
      { stage: 'REVIEW', label: 'Review', isViewed: false, isSubmitted: false },
    ];
    const fakeField = shallow(
      <ProgressStageProfile
        current={fakeCurrent}
        stages={fakeStages}
        className="exampleClassName"
      />,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.prop('isSubmitted')).to.equal(false);
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });

  it('can render a submitted profile progress stage with provided options', () => {
    const fakeCurrent = 'PROFILE';
    const fakeStages = [
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
      { stage: 'REVIEW', label: 'Review', isViewed: false, isSubmitted: false },
    ];
    const fakeField = shallow(
      <ProgressStageProfile
        current={fakeCurrent}
        stages={fakeStages}
        className="exampleClassName"
      />,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.prop('isSubmitted')).to.equal(true);
  });
});
