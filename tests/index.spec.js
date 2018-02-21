import { expect } from 'chai';
import { scale, getChromaticScale, getSemitonesFromInterval, getSemitonesFromScale } from '../src/index';

describe('Music Scale', () => {

  describe('get chromatic scale from tone', () => {

    it('should return an error when parameter is not a note', () => {
      expect(getChromaticScale('ABC')).to.be.an('error');
      expect(getChromaticScale('C')).to.not.an('error');
    });

    it('should return `A A# B C C# D D# E F F# G G#` when `getChromaticScale(\'A\')`', () => {
      const CHROMATIC_SCALE_A = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
      expect(getChromaticScale('A')).to.be.eql(CHROMATIC_SCALE_A);
    });
  });

  describe('transform interval in number of semitones', () => {

    it('should return an error when parameter is not an interval', () => {
      expect(getSemitonesFromInterval('A')).to.be.an('error');
    });

    it('should return `2` when `getSemitonesFromInterval(\'T\')`', () => {
      expect(getSemitonesFromInterval('T')).to.be.equal(2);
    });
  });

  describe('transform scale intervals in number of semitones between degrees', () => {

    it('should return an error when some interval in scale is not a valid interval', () => {
      expect(getSemitonesFromScale('T T ST T T AT ST')).to.be.an('error');
    });

    it('should return `2 2 1 2 2 2 1` when `getSemitonesFromScale(\'T T ST T T T ST\')`', () => {
      expect(getSemitonesFromScale('T T ST T T T ST')).to.be.equal('2 2 1 2 2 2 1');
    });
  });

  describe('get scale from tone', () => {

    it('should return an error when scale not exists', () => {
      expect(scale('E', 'bla')).to.be.an('error');
    });

    it('should return an error when note not exists', () => {
      expect(scale('K', 'bla')).to.be.an('error');
    });

    it('should return E major scale when `scale(\'E\', \'major\')`', () => {
      const eMajorScale = 'E F# G# A B C# D#';
      expect(scale('E', 'major')).to.be.equal(eMajorScale);
    });
  });
});
