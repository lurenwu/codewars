var bingo = require('./index.js');
var Test = require('../test')
var Test = new Test();
Test.assertEquals( bingo([1,2,3,4,5,6,7,8,9,10]), "LOSE");
Test.assertEquals( bingo([21,13,2,7,5,14,7,15,9,10]), "WIN");


