const CHROMATIC_SCALE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const SCALES = {
  'MAJOR': {
    'SEQUENCE': 'T T ST T T T ST',
    'DEGREE': 'M m m M M m °'
  },
  "MINOR": "T ST T T ST T T"
};

function getIndexFromToneOnScale(tone) {
  return CHROMATIC_SCALE.indexOf(tone);
}

function getChromaticScale(tone) {
  const index = getIndexFromToneOnScale(tone);

  if (index === -1) return new Error('Provide a correct note.');
  if (index === 0) return CHROMATIC_SCALE;

  const newScale = `${CHROMATIC_SCALE.slice(index)},${CHROMATIC_SCALE.slice(0, index)}`;
  return newScale.split(',');
}

function getSemitonesFromInterval(interval) {
  const NUMBER_OF_SEMITONES = {
    'ST': 1,
    'T': 2,
    'TST': 3
  };

  return NUMBER_OF_SEMITONES[interval] || new Error('Provide a correct interval');
}

function getSemitonesFromScale(scaleIntervals) {
  let scaleSemitones = [];
  const intervals = scaleIntervals.split(' ');

  for(let i = 0; i < intervals.length; i++) {
    const semitone = getSemitonesFromInterval(intervals[i]);
    if (semitone instanceof Error) return new Error('Provide a correct intervals sequence');
    scaleSemitones.push(semitone);
  }

  return scaleSemitones.join(' ');
}

function scale(userTone, userScale) {
  const scale = SCALES[userScale.toUpperCase()];
  if (!scale) return new Error('Provide a valid scale');

  const chromaticScale = getChromaticScale(userTone);
  if(chromaticScale instanceof Error) return chromaticScale;

  let degree = 0;
  const intervals = getSemitonesFromScale(scale.SEQUENCE).split(' ');
  const finalScale = [];

  intervals.forEach((interval) => {
    finalScale.push(chromaticScale[degree]);
    degree += Number(interval);
  });

  return finalScale.join(' ');
}

export { scale, getChromaticScale, getSemitonesFromInterval, getSemitonesFromScale };
