
var nbYear = require('./index.js');
var Test = require('../test')
var Test  = new Test();
Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);