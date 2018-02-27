let scales = require('../data/scales.json');

function buildProgression (progression) {
  const scaleSpec = scales.filter(item => item.name === progression.name)[0];
  if(!scaleSpec) throw new Error('Provide a valid scale');

  return progression.scale
            .split(' ')
            .map((item, index) => (scaleSpec.degree[index] === 'M' ? item : `${item}${scaleSpec.degree[index]}`));
}

export { buildProgression }
