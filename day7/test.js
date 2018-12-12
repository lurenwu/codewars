
var highAndLow = require('./index.js');
var Test = require('../test')
var Test  = new Test();
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
