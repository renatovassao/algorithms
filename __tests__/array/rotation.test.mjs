import { describe, it } from 'node:test';
import assert from 'node:assert';
import { rotation } from '../../src/array/rotation.mjs';

describe("rotation", () => {
    it("integer arrays", () => {
        assert.deepEqual(rotation([1], 1), [1]);
        assert.deepEqual(rotation([1, 2], 1), [2, 1]);
        assert.deepEqual(rotation([1, 2], 2), [1, 2]);
        assert.deepEqual(rotation([1, 2], 3), [2, 1]);
        assert.deepEqual(rotation([1, 2, 3], 1), [3, 1, 2]);
        assert.deepEqual(rotation([1, 2, 3], 2), [2, 3, 1]);
        assert.deepEqual(rotation([1, 2, 3], 3), [1, 2, 3]);
        assert.deepEqual(rotation([1, 2, 3], 4), [3, 1, 2]);
    });
});