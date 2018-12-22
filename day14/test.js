var getCount = require('./index.js');
var Test = require('../test')
var Test = new Test();
describe("Case 1", function(){
  it ("should be defined", function(){
      Test.assertEquals(getCount("abracadabra"), 5)
  });
});
