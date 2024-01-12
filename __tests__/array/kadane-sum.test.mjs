import { describe, it } from 'node:test';
import assert from 'node:assert';
import { kadaneSum } from '../../src/array/kadane-sum.mjs';

describe("kadane sum", () => {
    it("integer arrays", () => {
        assert.deepEqual(kadaneSum([1, 1]), 2);
        assert.deepEqual(kadaneSum([1, -1]), 1);
        assert.deepEqual(kadaneSum([1, -1, 2]), 2);
        assert.deepEqual(kadaneSum([1, -1, 2, -2, 3]), 3);
        assert.deepEqual(kadaneSum([-2, -3, 4, -1, -2, 1, 5, -3]), 7);
        assert.deepEqual(kadaneSum([-2, -3, 4, -1, -3, 1, 5, -3]), 6);
    });
});