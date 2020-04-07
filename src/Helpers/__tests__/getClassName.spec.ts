import { expect } from 'chai';
import getClassName from '../getClassName';

describe('Helpers/getClassName', () => {
  it ('can generate a valid class name function', () => {
    const fakeClassGenerator = getClassName('Example');
    // The returned function will be a class name generator from MUI
    expect(fakeClassGenerator).to.be.a('function');
  });
});
