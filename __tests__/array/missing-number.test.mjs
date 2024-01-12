import { describe, it } from 'node:test';
import assert from 'node:assert';
import { missingNumber } from '../../src/array/missing-number.mjs';

describe("missing number", () => {
    it("integer arrays", () => {
        assert.deepEqual(missingNumber([1]), 2);
        assert.deepEqual(missingNumber([2]), 1);
        assert.deepEqual(missingNumber([1, 2]), 3);
        assert.deepEqual(missingNumber([2, 3]), 1);
        assert.deepEqual(missingNumber([1, 3]), 2);
        assert.deepEqual(missingNumber([1, 2, 3]), 4);
        assert.deepEqual(missingNumber([1, 2, 4]), 3);
        assert.deepEqual(missingNumber([1, 3, 4]), 2);
        assert.deepEqual(missingNumber([2, 3, 4]), 1);
    });
});