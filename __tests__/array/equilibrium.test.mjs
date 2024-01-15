import { describe, it } from 'node:test';
import assert from 'node:assert';
import { equilibrium } from '../../src/array/equilibrium.mjs';

describe("equilibrium", () => {
    it("integer arrays", () => {
        assert.deepEqual(equilibrium([1]), -1);
        assert.deepEqual(equilibrium([1, 0]), 0);
        assert.deepEqual(equilibrium([1, 1, 1]), 1);
        assert.deepEqual(equilibrium([1, -1, 99]), 2);
        assert.deepEqual(equilibrium([2, 1, 1, 1]), 1);
        assert.deepEqual(equilibrium([2, -1, 7, 1]), 2);
    });
});