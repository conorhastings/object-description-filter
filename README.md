### object-description-filter

Pass in an object, with a nested description of the desired object. Return will be filtered version of passed in object based on description. Will ignore keys in the description if they don't exist in the base object.

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
