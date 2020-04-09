import React from 'react';
import { expect } from 'chai';
import FormHeading from '../FormHeading';
import { createShallow } from '@material-ui/core/test-utils';

describe('Common/Form/FormHeading', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('can render a heading with provided options', () => {
    const fakeField = shallow(
      <FormHeading className="exampleClassName">Example Heading</FormHeading>,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.text()).to.equal('Example Heading');
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });
});
