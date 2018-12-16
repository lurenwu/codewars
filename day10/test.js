
var evenNumbers = require('./index.js');
var Test = require('../test')
var Test  = new Test();
Test.assertSimilar(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
  Test.assertSimilar(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
  Test.assertSimilar(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);