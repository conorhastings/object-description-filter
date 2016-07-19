function objectDescriptionFilter(object, description) {
  if (typeof object !== 'object') {
    throw new Error('argument object expected type object but received ' + typeof object);
  } else if(typeof description !== 'object') {
    throw new Error('argument description expected type object but received ' + typeof description);
  }
  var returnObject = {};
  var keys = Object.keys(description);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var hasKey = object[key] !== undefined;
    if (hasKey && typeof(object[key]) === 'object' && !Array.isArray(object[key])) {
      returnObject[key] = objectDescriptionFilter(object[key], description[key])
    } else if (hasKey) {
      returnObject[key] = object[key];
    }
  }
  return returnObject;
}

module.exports = objectDescriptionFilter;
