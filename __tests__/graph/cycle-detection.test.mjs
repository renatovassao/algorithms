import { describe, it } from 'node:test';
import assert from 'node:assert';
import { cycleDetection } from '../../src/graph/cycle-detection.mjs';

describe("cycle detection", () => {
    it("two node graphs", () => {
        assert.deepEqual(cycleDetection(2, [[1, 2]]), false);
        assert.deepEqual(cycleDetection(2, [[1, 2], [2, 1]]), true);
    });

    it("three node graphs", () => {
        assert.deepEqual(cycleDetection(3, [[1, 2], [2, 3]]), false);
        assert.deepEqual(cycleDetection(3, [[1, 2], [2, 3], [3, 1]]), true);
        assert.deepEqual(cycleDetection(3, [[1, 3], [2, 1], [1, 2]]), true);
        assert.deepEqual(cycleDetection(3, [[1, 2], [2, 3], [3, 2]]), true);
    });

    it("four node graphs", () => {
        assert.deepEqual(cycleDetection(4, [[1, 2], [2, 3], [3, 4]]), false);
        assert.deepEqual(cycleDetection(4, [[1, 2], [2, 3], [3, 4], [4, 1]]), true);
        assert.deepEqual(cycleDetection(4, [[1, 2], [2, 3], [3, 4], [4, 2]]), true);
        assert.deepEqual(cycleDetection(4, [[1, 2], [3, 4]]), false);
    });
});