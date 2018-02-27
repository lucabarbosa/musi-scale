import { expect } from 'chai';
import {
  chromaticScaleFromTonic,
  interval2semitone,
  intervalSequence2semitoneSequence,
  tonicIndexOnChromaticScale,
} from '../../src/utils/conversors.utils';
import { buildScale } from '../../src/utils/buildScale.utils';
import { buildProgression } from '../../src/utils/buildProgression.utils';
import ChordProgression from '../../src/models/ChordProgression';
import Scale from '../../src/models/Scale';

describe('Utils', () => {

  describe('Conversors Utils', () => {
    describe('fn: tonicIndexOnChromaticScale', () => {

      it('should return a number', () => {
        expect(tonicIndexOnChromaticScale('C')).to.be.a('number');
      });

      it('should return a tonic index from natural scale (C chromatic scale)', () => {
        expect(tonicIndexOnChromaticScale('C')).to.be.equal(0);
      });
    });

    describe('fn: chromaticScaleFromTonic', () => {

      it('should return an Array', () => {
        expect(chromaticScaleFromTonic('D')).to.be.an('array');
      });

      it('should return a Chromatic Scale from Tonic', () => {
        const dChromaticScale = ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#'];
        expect(chromaticScaleFromTonic('D')).to.be.eql(dChromaticScale);
      });
    });

    describe('fn: interval2semitone', () => {

      it('should return a number', () => {
        expect(interval2semitone('T')).to.be.a('number');
      });

      it('should return the number of semitone in an interval', () => {
        expect(interval2semitone('T')).to.be.equal(2);
      });
    });

    describe('fn: intervalSequence2semitoneSequence', () => {
      const intervalSequence = ['T', 'T', 'ST', 'T', 'T', 'T', 'ST'];
      const semitoneSequence = [2, 2, 1, 2, 2, 2, 1];

      it('shoud return an array', () => {
        expect(intervalSequence2semitoneSequence(intervalSequence)).to.be.an('array');
      });

      it('should transform a scale sequence interval in a semitone interval', () => {
        expect(intervalSequence2semitoneSequence(intervalSequence)).to.be.eql(semitoneSequence);
      });
    });
  });

  describe('Build Scale Utils', () => {

    it('should throw when scale not exists', () => {
      const scale = new Scale('bla', 'A');
      expect(buildScale(scale)).to.throw();
    })

    it('should return a scale', () => {
      const scale = new Scale('major', 'A');
      const aMajorScale = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'];
      expect(buildScale(scale)).to.be.eql(aMajorScale);
    });
  });

  describe('Build ChordProgression Utils', () => {

    it('should throw when scale not exists', () => {
      const chordProgression = new ChordProgression('bla', 'A');
      expect(buildProgression(chordProgression)).to.throw();
    });

    it('should return a progression', () => {
      const chordProgression = new ChordProgression('major', 'A');
      chordProgression.scale = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'];
      const aMajorProgression = ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#°'];
      expect(buildProgression(chordProgression)).to.be.eql(aMajorProgression);
    });
  });
});


