import { expect } from 'chai';
import { getChordProgression } from '../../src/services/ChordProgression';


describe('ChordProgression Service', () => {
  const aMajorScale = 'A Bm C#m D E F#m G#°';

  it('should return a string', () => {
    expect(getChordProgression('major', 'A').progression).to.be.a('string');
  });

  it('should return a progression', () => {
    expect(getChordProgression('major', 'A').progression).to.be.equal(aMajorScale);
  });
});
