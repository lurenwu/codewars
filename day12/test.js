var palindromicExpression = require('./index.js');
var Test = require('../test')
var Test = new Test();
describe("Solution", function(){
    it("should test for something", function(){
      let s = palindromicExpression();
      let r = s.split('').reverse().join('')
      Test.assertEquals(s, r, "Must be a palindrome");
    });
  });