import { describe, it } from 'node:test';
import assert from 'node:assert';
import { trappingWater } from '../../src/array/trapping-water.mjs';

describe("trapping water", () => {
    it("integer arrays", () => {
        assert.deepEqual(trappingWater([1]), 0);
        assert.deepEqual(trappingWater([1, 1]), 0);
        assert.deepEqual(trappingWater([2, 1, 2]), 1);
        assert.deepEqual(trappingWater([2, 1, 3]), 1);
        assert.deepEqual(trappingWater([3, 1, 2]), 1);
        assert.deepEqual(trappingWater([3, 1, 3]), 2);
        assert.deepEqual(trappingWater([1, 2, 1, 3, 1]), 1);
        assert.deepEqual(trappingWater([2, 1, 4, 1, 3]), 3);
        assert.deepEqual(trappingWater([3, 1, 4, 1, 2]), 3);
    });
});