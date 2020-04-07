import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { ProfileRegister } from "../ProfileRegister";

describe('ProfileRegister', () => {
  it('can render the basic component', () => {
    const fakeComponent = shallow(<ProfileRegister className="exampleClassName" />);
    expect(fakeComponent).to.have.length(1);
    expect(fakeComponent.hasClass('exampleClassName')).to.equal(true);
  });
});
