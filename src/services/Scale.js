import Scale from '../models/Scale';
import { buildScale } from '../utils/buildScale.utils';

function getScale(name, tonic) {
  const scale = new Scale(name, tonic);
  scale.scale = buildScale(scale);
  return scale;
}

export { getScale }
