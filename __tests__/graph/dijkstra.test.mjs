import { describe, it } from 'node:test';
import assert from 'node:assert';
import { dijkstra } from '../../src/graph/dijkstra.mjs';

describe("dijkstra", () => {
    it("two node graphs", () => {
        assert.deepEqual(dijkstra(2, [[1, 2, 1]], 1), [0, 1]);
        assert.deepEqual(dijkstra(2, [], 1), [0, Infinity]);
    });

    it("three node graphs", () => {
        assert.deepEqual(dijkstra(3, [[1, 2, 1], [2, 3, 2]], 1), [0, 1, 3]);
        assert.deepEqual(dijkstra(3, [[1, 2, 1], [1, 3, 3], [2, 3, 1]], 1), [0, 1, 2]);
    });
});