var duplicateCount = require('./index.js');
var Test = require('../test')
var Test = new Test();
const assert = require("chai").assert;
Test.assertEquals(duplicateCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
