function objectDescriptionFilter(description, object) {
  if (arguments.length === 1 && typeof description === 'object') {
    return function (object) {
      return objectDescriptionFilter(description, object);
    }
  }

  if (typeof description !== 'object') {
    throw new Error('argument object expected type object but received ' + typeof description);
  } else if(typeof object !== 'object') {
    throw new Error('argument description expected type object but received ' + typeof object);
  }
  var returnObject = {};
  var descriptionKeys = Object.keys(description);
  for (var i = 0; i < descriptionKeys.length; i++) {
    var key = descriptionKeys[i];
    var hasKey = object[key] !== undefined;
    if (hasKey && typeof(object[key]) === 'object' && !Array.isArray(object[key])) {
      var needsRecursion = typeof description[key] === 'object' && !Array.isArray(description[key]);
      returnObject[key] = (
        needsRecursion 
        ?
        objectDescriptionFilter(description[key], object[key])
        :
        object[key]
      );
    } else if (hasKey) {
      returnObject[key] = object[key];
    }
  }
  return returnObject;
}

module.exports = objectDescriptionFilter;
