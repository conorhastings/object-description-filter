function objectDescriptionFilter(object, description) {
  var returnObject = {};
  var keys = Object.keys(description);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var hasKey = object[key] !== undefined;
    if (hasKey && typeof(object[key]) === 'object' && !Array.isArray(object[key])) {
      returnObject[key] = objectDescriptionFilter(object[key], description[key])
    }
    else if (hasKey) {
      returnObject[key] = object[key];
    }
  }
  return returnObject;
}

module.exports = objectDescriptionFilter;
