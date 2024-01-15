import { describe, it } from 'node:test';
import assert from 'node:assert';
import { leaders } from '../../src/array/leaders.mjs';

describe("leaders", () => {
    it("integer arrays", () => {
        assert.deepEqual(leaders([1]), 1);
        assert.deepEqual(leaders([1, 2]), 1);
        assert.deepEqual(leaders([2, 1]), 2);
        assert.deepEqual(leaders([1, 2, 1]), 2);
        assert.deepEqual(leaders([3, 2, 1]), 3);
        assert.deepEqual(leaders([3, 1, 1]), 2);
    });
});