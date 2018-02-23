const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function tonicIndexOnChromaticScale (tonic) {
  return chromaticScale.indexOf(tonic);
}

function chromaticScaleFromTonic (tonic) {
  const tonicIndex = tonicIndexOnChromaticScale(tonic);

  if(tonicIndex === -1) throw new Error('Provide a valid tonic');

  return chromaticScale
            .slice(tonicIndex)
            .concat(chromaticScale.slice(0, tonicIndex));
}

function interval2semitone (interval) {
  const numberOfSemitones = {
    'T': 2,
    'ST': 1,
    'TST': 3
  };

  return numberOfSemitones[interval];
}

function intervalSequence2semitoneSequence (intervalSequence) {
  return intervalSequence.map(interval => interval2semitone(interval));
}

export {
  chromaticScaleFromTonic,
  interval2semitone,
  intervalSequence2semitoneSequence,
  tonicIndexOnChromaticScale,
}
