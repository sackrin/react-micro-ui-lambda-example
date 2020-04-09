import React from 'react';
import { expect } from 'chai';
import ProgressStageAddress from '../ProgressStageAddress';
import { createShallow } from '@material-ui/core/test-utils';

describe('Progress/ProgressStageAddress', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('can render a address progress stage with provided options', () => {
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
        isViewed: false,
        isSubmitted: false,
      },
      { stage: 'REVIEW', label: 'Review', isViewed: false, isSubmitted: false },
    ];
    const fakeField = shallow(
      <ProgressStageAddress
        current={fakeCurrent}
        stages={fakeStages}
        className="exampleClassName"
      />,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.prop('isSubmitted')).to.equal(false);
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });

  it('can render a submitted address progress stage with provided options', () => {
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
      { stage: 'REVIEW', label: 'Review', isViewed: false, isSubmitted: false },
    ];
    const fakeField = shallow(
      <ProgressStageAddress
        current={fakeCurrent}
        stages={fakeStages}
        className="exampleClassName"
      />,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.prop('isSubmitted')).to.equal(true);
  });
});
