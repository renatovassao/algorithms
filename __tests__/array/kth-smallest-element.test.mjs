import { describe, it } from 'node:test';
import assert from 'node:assert';
import { KthSmallestElement } from '../../src/array/kth-smallest-element.mjs';

describe("Kth Smallest Element", () => {
    it("integer arrays", () => {
        assert.deepEqual(KthSmallestElement([1], 1), 1);
        assert.deepEqual(KthSmallestElement([1, 2], 1), 1);
        assert.deepEqual(KthSmallestElement([1, 2], 2), 2);
        assert.deepEqual(KthSmallestElement([2, 1], 2), 2);
        assert.deepEqual(KthSmallestElement([2, 1], 1), 1);
        assert.deepEqual(KthSmallestElement([2, 1, 3], 1), 1);
        assert.deepEqual(KthSmallestElement([2, 1, 3], 2), 2);
        assert.deepEqual(KthSmallestElement([2, 1, 3], 3), 3);
        assert.deepEqual(KthSmallestElement([7, 10, 4, 3, 20, 15], 3), 7);
        assert.deepEqual(KthSmallestElement([7, 10, 4, 3, 20, 15], 4), 10);
    });
});