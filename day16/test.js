var isPrime = require('./index.js');
var Test = require('../test')
var Test = new Test();
Test.expect(isPrime(0) === false, '0 is not prime');
Test.expect(isPrime(1) === false, '1 is not prime');
Test.expect(isPrime(2) === true, '2 is prime');

