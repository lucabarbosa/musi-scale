import { expect } from 'chai';
import ChordProgression from '../../src/models/ChordProgression';

const chordProgression = new ChordProgression('major', 'A');

describe('ChordProgression Class', () => {
  it('Should return a scale name', () => {
    expect(chordProgression.name).to.be.equal('MAJOR');
  });

  it('Should return a tonic of scale', () => {
    expect(chordProgression.tonic).to.be.equal('A');
  });
});
