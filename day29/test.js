var {encode,decode} = require('./index.js');
var Test = require('../test')
var Test = new Test();
Test.assertEquals(encode('A'), '1A');
Test.assertEquals(encode('AAA'), '3A');
Test.assertEquals(encode('AB'), '1A1B');
Test.assertEquals(encode('AAABBBCCCA'), '3A3B3C1A');
Test.assertEquals(decode('1A'), 'A');
Test.assertEquals(decode('3A'), 'AAA');
Test.assertEquals(decode('1A1B'), 'AB');
Test.assertEquals(decode('3A3B3C1A'), 'AAABBBCCCA');
Test.assertEquals(decode(encode('AAAAAAAAAAB')), 'AAAAAAAAAAB');
Test.assertEquals(decode(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ')), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
Test.assertEquals(encode(decode('10A1B')), '10A1B');
Test.assertEquals(encode(decode('1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z')), '1A1B1C1D1E1F1G1H1I1J1K1L1M1N1O1P1Q1R1S1T1U1V1W1X1Y1Z');