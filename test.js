const assert = require('power-assert');
const calculator = require('.');

describe('calculator', () => {

    it('Rank 1 should have 25 LP limit', () => {
        assert.strictEqual(calculator.getLpByRank(1), 25);
    });

    it('Rank 12 should have 31 LP limit', () => {
        assert.strictEqual(calculator.getLpByRank(12), 31);
    });

    it('Rank 57 should have 53 LP limit', () => {
        assert.strictEqual(calculator.getLpByRank(57), 53);
    });

    it('Rank 403 should have 209 LP limit', () => {
        assert.strictEqual(calculator.getLpByRank(403), 209);
    });

    it('Rank 460 should have 228 LP limit', () => {
        assert.strictEqual(calculator.getLpByRank(460), 228);
    });

    it('Rank 550 should have 258 LP limit', () => {
        assert.strictEqual(calculator.getLpByRank(550), 258);
    });

    it('Rank 777 should have 334 LP limit', () => {
        assert.strictEqual(calculator.getLpByRank(777), 334);
    });

    it('Rank 810 should have 341 LP limit', () => {
        assert.strictEqual(calculator.getLpByRank(810), 341);
    });

    it('Rank 1 should have 10 Friends limit', () => {
        assert.strictEqual(calculator.getFriendsByRank(1), 10);
    });

    it('Rank 5 should have 11 Friends limit', () => {
        assert.strictEqual(calculator.getFriendsByRank(5), 11);
    });

    it('Rank 10 should have 12 Friends limit', () => {
        assert.strictEqual(calculator.getFriendsByRank(10), 12);
    });

    it('Rank 50 should have 20 Friends limit', () => {
        assert.strictEqual(calculator.getFriendsByRank(50), 20);
    });

    it('Rank 60 should have 21 Friends limit', () => {
        assert.strictEqual(calculator.getFriendsByRank(60), 21);
    });

    it('Rank 840 should have 99 Friends limit', () => {
        assert.strictEqual(calculator.getFriendsByRank(840), 99);
    });

    it('Rank 841 should have 99 Friends limit', () => {
        assert.strictEqual(calculator.getFriendsByRank(841), 99);
    });

});
