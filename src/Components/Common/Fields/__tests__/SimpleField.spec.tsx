import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import SimpleField from '../SimpleField';
import { createShallow } from '@material-ui/core/test-utils';

describe('Common/Fields/SimpleField', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('can render a simple field with provided options', () => {
    const fakeOnChange = sinon.fake();
    const fakeField = shallow(
      <SimpleField
        value="John Smith"
        onChange={fakeOnChange}
        className="exampleClassName"
      />,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });
});
