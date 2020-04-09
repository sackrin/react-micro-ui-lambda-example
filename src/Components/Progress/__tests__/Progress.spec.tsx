import React from 'react';
import { expect } from 'chai';
import Progress from '../Progress';
import { createShallow } from '@material-ui/core/test-utils';

describe('Progress/Progress', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('can render a progress container with provided options', () => {
    const fakeField = shallow(
      <Progress className="exampleClassName">Example Contents</Progress>,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.text()).to.equal('Example Contents');
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });
});
