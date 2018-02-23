import { expect } from 'chai';
import Scale from '../../src/models/Scale';

const scale = new Scale('major', 'A');

describe('Scale Class', () => {
  it('Should return a scale name', () => {
    expect(scale.name).to.be.equal('MAJOR');
  });

  it('Should return a tonic of scale', () => {
    expect(scale.tonic).to.be.equal('A');
  });
});
