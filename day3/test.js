
var countPositivesSumNegatives = require('./index.js');
var expect = require('chai').expect;
var Test = require('../test')
var Test  = new Test();
describe("Example tests", function(){
  var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  var actual = countPositivesSumNegatives(testData);
  var expected = [10, -65];
  Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
  
  testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
  actual = countPositivesSumNegatives(testData);
  expected = [8, -50];
  
  Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
});