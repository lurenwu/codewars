var movie = require('./index.js');
var Test = require('../test')
var Test = new Test();

Test.assertEquals(movie(500, 15, 0.9), 43)
Test.assertEquals(movie(100, 10, 0.95), 24)