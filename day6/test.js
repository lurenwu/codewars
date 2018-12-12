
var countSheeps = require('./index.js');
var Test = require('../test')
var Test  = new Test();
var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true, true ];
Test.expect(countSheeps(array1) == 18, "There are 18 sheeps in total")