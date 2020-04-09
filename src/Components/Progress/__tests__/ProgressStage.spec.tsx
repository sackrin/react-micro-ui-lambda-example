import React from 'react';
import { expect } from 'chai';
import ProgressStage from '../ProgressStage';
import { createShallow } from '@material-ui/core/test-utils';

describe('Progress/ProgressStage', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('can render a progress stage with provided options', () => {
    const fakeField = shallow(
      <ProgressStage isSubmitted={false} className="exampleClassName">
        Example Contents
      </ProgressStage>,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.text()).to.equal('Example Contents');
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
    expect(fakeField.hasClass('makeStyles-submitted-2')).to.equal(false);
  });

  it('can render a progress stage with isSubmitted set to true', () => {
    const fakeField = shallow(
      <ProgressStage isSubmitted={true} className="exampleClassName">
        Example Contents
      </ProgressStage>,
    );
    expect(fakeField.hasClass('makeStyles-submitted-2')).to.equal(true);
  });
});
