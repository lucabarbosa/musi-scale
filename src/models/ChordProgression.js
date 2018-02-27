import Scale from './Scale';

class ChordProgression extends Scale {
  constructor(name, tonic) {
    super(name, tonic);
    this._chordProgression = [];
  }

  get progression() {
    return this._chordProgression.join(' ');
  }

  set progression(chordProgression) {
    this._chordProgression = chordProgression;
  }
}

export default ChordProgression;
