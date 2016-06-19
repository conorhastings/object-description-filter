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
  var filtered = objectDescriptionFilter(obj, description);
  assert.deepEqual(expected, filtered);
  assert.end();
});

test('should throw when typeof object argument is not object', function(assert) {
  assert.throws(function() { objectDescriptionFilter() }, 'argument object expected type object but received undefined');
  assert.end();
});

test('should throw when typeof description argument is not object', function(assert) {
  assert.throws(function() {  objectDescriptionFilter('', 2) }, 'argument description expected type object but received number');
  assert.end();
});