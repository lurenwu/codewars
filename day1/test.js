var removeEveryOther = require('./index.js');
var Test = require('../test')
var Test  = new Test();


// describe('Basic tests', function() {
//     it('Basic tests', function() {
//       expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']).toString()).to.be.equal(['Hello', 'Hello Again'].toString());
//       expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toString()).to.be.equal([1, 3, 5, 7, 9].toString());
//       expect(removeEveryOther([]).toString()).to.be.equal([].toString());

//     });
//   });
Test.describe("Basic tests",_=>{
    Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
    Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
    Test.assertSimilar(removeEveryOther([]), []);
})