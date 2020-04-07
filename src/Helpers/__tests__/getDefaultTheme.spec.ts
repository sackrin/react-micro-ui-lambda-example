import { expect } from 'chai';
import getDefaultTheme from '../getDefaultTheme';

describe('Helpers/getDefaultTheme', () => {
  it ('can return an object that looks like a mui theme', () => {
    const fakeTheme = getDefaultTheme();
    expect(fakeTheme).to.have.property('typography');
    expect(fakeTheme).to.have.property('overrides');
  });
});
