import { describe, it } from 'node:test';
import assert from 'node:assert';
import { bfs } from '../../src/graph/bfs.mjs';

describe("bfs", () => {
    it("two node graphs", () => {
        assert.deepEqual(bfs(2, 1, [[1, 2]]), [1, 2]);
        assert.deepEqual(bfs(2, 2, [[1, 2]]), [2, 1]);
    });

    it("three node graph", () => {
        assert.deepEqual(bfs(3, 1, [[1, 2], [2, 3]]), [1, 2, 3]);
        assert.deepEqual(bfs(3, 1, [[1, 2], [1, 3]]), [1, 2, 3]);
        assert.deepEqual(bfs(3, 1, [[1, 3], [1, 2]]), [1, 3, 2]);
        assert.deepEqual(bfs(3, 1, [[1, 3], [2, 3]]), [1, 3, 2]);
        assert.deepEqual(bfs(3, 1, [[1, 3]]), [1, 3]);
        assert.deepEqual(bfs(3, 2, [[1, 3]]), [2]);
    });

    it("four node graph", () => {
        assert.deepEqual(bfs(4, 1, [[1, 2], [2, 3], [3, 4]]), [1, 2, 3, 4]);
        assert.deepEqual(bfs(4, 1, [[1, 2], [1, 3], [1, 4]]), [1, 2, 3, 4]);
        assert.deepEqual(bfs(4, 4, [[1, 2], [1, 3], [1, 4]]), [4, 1, 2, 3]);
        assert.deepEqual(bfs(4, 1, [[1, 2], [3, 4]]), [1, 2]);
        assert.deepEqual(bfs(4, 4, [[1, 2], [3, 4]]), [4, 3]);
    });
});