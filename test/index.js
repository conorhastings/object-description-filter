var test = require('tape');
var objectDescriptionFilter = require('../index.js');

var obj = {
  nice: "dope",
  cool: "wow",
  luther: {
    cool: {
      dope: {
        wow: "nice",
        nice: "not"
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
  "nice": "dope",
  "luther": {
    "cool": {
      "dope": {
        "wow": "nice"
      }
    }
  }
}

test("object is properly filtered", function(assert) {
  var filtered = objectDescriptionFilter(obj, description);
  assert.deepEqual(expected, filtered);
  assert.end();
});