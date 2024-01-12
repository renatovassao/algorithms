import { describe, it } from 'node:test';
import assert from 'node:assert';
import { kadaneProduct } from '../../src/array/kadane-product.mjs';

describe("maximum product", () => {
    it("integer arrays", () => {
        assert.deepEqual(kadaneProduct([1]), 1);
        assert.deepEqual(kadaneProduct([1, 1]), 1);
        assert.deepEqual(kadaneProduct([1, 2]), 2);
        assert.deepEqual(kadaneProduct([-1, -2]), 2);
        assert.deepEqual(kadaneProduct([-1, -2, -3]), 6);
        assert.deepEqual(kadaneProduct([6, -3, -10, 0, 2]), 180);
        assert.deepEqual(kadaneProduct([-1, -3, -10, 0, 60]), 60);
    });
});