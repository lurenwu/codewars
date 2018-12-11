
var litres = require('./index.js');
var Test = require('../test')
var Test  = new Test();
Test.describe('Fixed tests', _ => {
  // Test.it('Tests', _ => {
    Test.assertEquals(litres(2), 1, 'should return 1 litre');
    Test.assertEquals(litres(1.4), 0, 'should return 0 litres');
    Test.assertEquals(litres(12.3), 6, 'should return 6 litres');
    Test.assertEquals(litres(0.82), 0, 'should return 0 litres');
    Test.assertEquals(litres(11.8), 5, 'should return 5 litres');
    Test.assertEquals(litres(1787), 893, 'should return 893 litres');
    Test.assertEquals(litres(0), 0, 'should return 0 litres');
  // });
});
  