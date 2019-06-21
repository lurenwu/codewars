var stringExpansion = require('./index.js');
var Test = require('../test')
var Test = new Test();
Test.assertEquals(stringExpansion('3abc'),'aaabbbccc');
Test.assertEquals(stringExpansion('3D2a5d2f'),'DDDaadddddff');
Test.assertEquals(stringExpansion('0d0a0v0t0y'),'');
Test.assertEquals(stringExpansion('3d332f2a'),'dddffaa');
Test.assertEquals(stringExpansion('abcde'),'abcde');
Test.assertEquals(stringExpansion('a2bcde'),'abbccddee');