import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProfilePersonal from "../ProfilePersonal";

describe('ProfilePersonal', () => {
  it('can render the basic component', () => {
    const fakeComponent = shallow(<ProfilePersonal className="exampleClassName" />);
    expect(fakeComponent).to.have.length(1);
    expect(fakeComponent.hasClass('exampleClassName')).to.equal(true);
  });
});
