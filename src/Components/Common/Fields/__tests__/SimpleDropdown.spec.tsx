import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import SimpleDropdown from '../SimpleDropdown';
import { createShallow } from '@material-ui/core/test-utils';

describe('Common/Fields/SimpleDropdown', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('can render a simple dropdown with provided options', () => {
    const fakeOnChange = sinon.fake();
    const fakeField = shallow(
      <SimpleDropdown
        options={[
          { value: 'ITEM_1', label: 'Item One' },
          { value: 'ITEM_2', label: 'Item Two' },
          { value: 'ITEM_2', label: 'Item Three' },
        ]}
        value="ITEM_2"
        onChange={fakeOnChange}
        className="exampleClassName"
      />,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.find('WithStyles(ForwardRef(MenuItem))')).to.have.length(3);
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });
});
