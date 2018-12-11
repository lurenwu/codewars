var expect = require('chai').expect;

class Text {
    constructor() {

    }
    describe(testName,fn) {
        return describe(testName,fn)
    }
    it(testName,fn) { 
        return it(testName,fn)
    }
    expect(result) {
        it('Basic tests', function(done) {
            expect(result).to.be.ok
            done()
        })
    }
    assertSimilar(fn,result) {
        it('Basic tests', function(done) {
            expect(fn.toString()).to.be.equal(result.toString());
            done()
        })
    }
    assertEquals(fn,result,des) {
        it('Basic tests', function(done) {
            expect(fn).to.be.equal(result);
            done()
        })
    }
}
module.exports = Text