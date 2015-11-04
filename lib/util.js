var _ = require('lodash');

module.exports = {
  /** This function should allow the original object to be extended in such a way that if the
   * new object (a) already contains a property of the old (b) and it is an object, it delves
   * into the old object and overrides individual properties instead of replacing the whole
   * object.  Likewise, if a property is an array, it should concatenate the new onto the old
   * rather than replacing the entire array.
   *
   * UPDATE: using lodash.merge instead of a handrolled implementation
   *
   * NOTE: This is a simple implementation, in that we're not extending getters and setters properly.
   * Only use this for simple data model type objects.
   *
   * @param {Object} a The object to augment
   * @param {Object} o The object to augment from
   */
  recursiveExtend: function(a, b) {
    return _.merge(a, b, function(_a, _b) {
      //concat arrays
      if (_.isArray(_a)) {
        return _a.concat(_b);
      }
    });
  }
};