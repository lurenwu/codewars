var validPhoneNumber = require('./index.js');
var Test = require('../test')
var Test = new Test();
Test.assertEquals(validPhoneNumber("(123) 456-7890"), true);