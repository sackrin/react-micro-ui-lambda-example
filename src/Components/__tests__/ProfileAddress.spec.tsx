import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProfileAddress from "../ProfileAddress";

describe('ProfileAddress', () => {
  it('can render the basic component', () => {
    const fakeComponent = shallow(<ProfileAddress className="exampleClassName" />);
    expect(fakeComponent).to.have.length(1);
    expect(fakeComponent.hasClass('exampleClassName')).to.equal(true);
  });
});
