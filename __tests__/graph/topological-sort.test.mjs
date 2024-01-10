import { describe, it } from 'node:test';
import assert from 'node:assert';
import { topologicalSort } from '../../src/graph/topological-sort.mjs';

describe("topological sort", () => {
    it("two node graphs", () => {
        assert.deepEqual(topologicalSort(2, [[1, 2]]), [1, 2]);
        assert.deepEqual(topologicalSort(2, [[2, 1]]), [2, 1]);
    });

    it("three node graphs", () => {
        assert.deepEqual(topologicalSort(3, [[1, 2], [2, 3]]), [1, 2, 3]);
        assert.deepEqual(topologicalSort(3, [[1, 2], [1, 3]]), [1, 3, 2]);
        assert.deepEqual(topologicalSort(3, [[1, 2], [3, 2]]), [3, 1, 2]);
    });

    it("four node graphs", () => {
        assert.deepEqual(topologicalSort(4, [[1, 2], [2, 3], [3, 4]]), [1, 2, 3, 4]);
        assert.deepEqual(topologicalSort(4, [[1, 2], [2, 3], [4, 3]]), [4, 1, 2, 3]);
        assert.deepEqual(topologicalSort(4, [[1, 2], [2, 3], [4, 2]]), [4, 1, 2, 3]);
        assert.deepEqual(topologicalSort(4, [[1, 2], [3, 4]]), [3, 4, 1, 2]);
    });
});