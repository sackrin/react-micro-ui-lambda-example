import React from 'react';
import { expect } from 'chai';
import FormContainer from '../FormContainer';
import { createShallow } from '@material-ui/core/test-utils';

describe('Common/Form/FormContainer', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('can render a form container with provided options', () => {
    const fakeField = shallow(
      <FormContainer className="exampleClassName">
        Example Contents
      </FormContainer>,
    );
    expect(fakeField).to.have.length(1);
    expect(fakeField.text()).to.equal('Example Contents');
    expect(fakeField.hasClass('exampleClassName')).to.equal(true);
  });
});
