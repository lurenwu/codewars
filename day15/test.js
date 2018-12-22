var pigIt = require('./index.js');
var Test = require('../test')
var Test = new Test();
Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
