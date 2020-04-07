import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProfileProgress from "../ProfileProgress";

describe('ProfileProgress', () => {
  it('can render the basic component', () => {
    const fakeComponent = shallow(<ProfileProgress className="exampleClassName" />);
    expect(fakeComponent).to.have.length(1);
    expect(fakeComponent.hasClass('exampleClassName')).to.equal(true);
  });
});
