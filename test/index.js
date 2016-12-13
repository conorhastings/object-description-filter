var test = require('tape');
var objectDescriptionFilter = require('../index.js');

var obj = {
  nice: 'dope',
  cool: 'wow',
  luther: {
    cool: {
      dope: {
        wow: 'nice',
        nice: 'not'
      }
    }
  }
};

var description = {
  nice: true,
  luther: {
    cool: {
      dope: {
        wow: true,
        super: true
      }
    }
  }
};

var expected = {
  'nice': 'dope',
  'luther': {
    'cool': {
      'dope': {
        'wow': 'nice'
      }
    }
  }
}

test('object is properly filtered', function(assert) {
  var filtered = objectDescriptionFilter(description, obj);
  assert.deepEqual(filtered, expected);
  assert.end();
});

test('should throw when typeof object argument is not object', function(assert) {
  assert.throws(function() { objectDescriptionFilter() }, 'argument description expected type object but received undefined');
  assert.end();
});

test('should throw when typeof description argument is not object', function(assert) {
  assert.throws(function() {  objectDescriptionFilter({}, 2) }, 'argument object expected type object but received number');
  assert.end();
});

test('should allow partial application when only passing in a single description argument', function(assert) {
  var objectFilter = objectDescriptionFilter(description);
  var filtered = objectFilter(obj);
  assert.deepEqual(filtered, expected);
  assert.end();
});