const assert = require('assert');
const sum = require('../dome/add');


describe('#hello.js', () => {
    describe('#sum()', () => {

        it('sum() should return 0', () => {
            assert.strictEqual(sum(), 0);
        });

        it('sum(1) should return 2', () => {
            assert.strictEqual(sum(1), 2);
        });

        it('sum(2) should return 3', () => {
            assert.strictEqual(sum(2), 3);
        });

        it('sum(3) should return 4', () => {
            assert.strictEqual(sum(3), 4);
        });
    });
});