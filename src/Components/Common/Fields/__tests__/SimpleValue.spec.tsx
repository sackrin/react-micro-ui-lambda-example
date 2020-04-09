import React from 'react';
import { expect } from 'chai';
import SimpleValue from '../SimpleValue';
import { createShallow } from '@material-ui/core/test-utils';

describe('Common/Fields/SimpleValue', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('can render a field value with provided options', () => {
    const fakeField = shallow(
      <SimpleValue label="First Name" className="exampleClassName">
        John Smith
      </SimpleValue>,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.find('.test-simpleValueLabel').text()).to.equal('First Name');
    expect(fakeField.find('.test-simpleValueText').text()).to.equal('John Smith');
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });
});
