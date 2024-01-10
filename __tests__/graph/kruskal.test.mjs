import { describe, it } from 'node:test';
import assert from 'node:assert';
import { kruskal } from '../../src/graph/kruskal.mjs';

describe("kruskal", () => {
    it("two node graphs", () => {
        assert.deepEqual(kruskal(2, [[1, 2, 1]]), 1);
    });

    it("three node graphs", () => {
        assert.deepEqual(kruskal(3, [[1, 2, 1], [2, 3, 1]]), 2);
        assert.deepEqual(kruskal(3, [[1, 2, 1], [1, 3, 1]]), 2);
        assert.deepEqual(kruskal(3, [[1, 2, 1], [1, 3, 2], [2, 3, 1]]), 2);
    });

    it("four node graphs", () => {
        assert.deepEqual(kruskal(4, [[1, 2, 1], [2, 3, 1], [3, 4, 1]]), 3);
        assert.deepEqual(kruskal(4, [[1, 2, 1], [2, 3, 1], [3, 1, 2], [3, 4, 1]]), 3);
    });
});