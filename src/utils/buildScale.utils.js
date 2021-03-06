import {
  chromaticScaleFromTonic,
  intervalSequence2semitoneSequence,
} from './conversors.utils';

let scales = require('../data/scales.json');

function buildScale(scale) {
  const chromaticScale =  chromaticScaleFromTonic(scale.tonic);
  const scaleSpec = scales.filter(item => item.name === scale.name)[0];

  if(!scaleSpec) throw new Error('Provide a valid scale');

  const semitoneSequence = intervalSequence2semitoneSequence(scaleSpec.sequence);
  return scaleFromSemitoneSequence(chromaticScale, semitoneSequence);
}

function scaleFromSemitoneSequence(chromaticScale, semitoneSequence) {
  let degree = 0;
  let scale = [];

  semitoneSequence.forEach((interval) => {
    scale.push(chromaticScale[degree]);
    degree += Number(interval);
  });

  return scale;
}

export { buildScale }
