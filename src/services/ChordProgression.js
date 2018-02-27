import ChordProgression from '../models/ChordProgression';
import { getScale } from './Scale';
import { buildProgression } from '../utils/buildProgression.utils';

function getChordProgression(name, tonic) {
  const chordProgression = new ChordProgression(name, tonic);
  chordProgression.scale = getScale(chordProgression.name, chordProgression.tonic)
                              .scale
                              .split(' ');

  chordProgression.progression = buildProgression(chordProgression);
  return chordProgression;
}

export { getChordProgression }
