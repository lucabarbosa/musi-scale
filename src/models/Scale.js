class Scale {
  constructor(name, tonic) {
    this._tonic = tonic.toUpperCase();
    this._name = name.toUpperCase();
    this._scale = [];
  }

  get name() {
    return this._name;
  }

  get tonic() {
    return this._tonic;
  }

  get scale() {
    return this._scale.join(' ');
  }

  set scale(scale) {
    this._scale = scale;
  }

}

export default Scale;
