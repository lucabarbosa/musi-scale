import { expect } from 'chai';
import { getScale } from '../../src/services/Scale';


describe('Scale Service', () => {
  const aMajorScale = 'A B C# D E F# G#';

  it('should return a string', () => {
    expect(getScale('major', 'A')).to.be.a('string');
  });

  it('should return a scale', () => {
    expect(getScale('major', 'A')).to.be.equal(aMajorScale);
  });
});
