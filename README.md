### object-description-filter

[![CircleCI](https://circleci.com/gh/conorhastings/object-description-filter.svg?style=svg)](https://circleci.com/gh/conorhastings/object-description-filter)

Pass in an object, and a nested description of the desired return object. Return will be filtered version of passed in object based on description. Will ignore keys in the description if they don't exist in the base object.

### use

`npm i --save object-description-filter`

```js
var objectDescriptionFilter = require('object-description-filter');

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

var filtered = objectDescriptionFilter(obj, description);
/* returns 
{
  "nice": "dope",
  "luther": {
    "cool": {
      "dope": {
        "wow": "nice"
      }
    }
  }
}
/*
```
