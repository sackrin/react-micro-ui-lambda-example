import React from 'react';
import { expect } from 'chai';
import ProgressStageLabel from '../ProgressStageLabel';
import { createShallow } from '@material-ui/core/test-utils';

describe('Progress/ProgressStageLabel', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('can render a progress stage label with provided options', () => {
    const fakeField = shallow(
      <ProgressStageLabel className="exampleClassName">
        Example Contents
      </ProgressStageLabel>,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.text()).to.equal('Example Contents');
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });
});
