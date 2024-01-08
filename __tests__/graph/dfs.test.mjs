import { describe, it } from 'node:test';
import assert from 'node:assert';
import { dfs } from '../../src/graph/dfs.mjs';

describe("dfs", () => {
    it("two node graphs", () => {
        assert.deepEqual(dfs(2, 1, [[1, 2]]), [1, 2]);
        assert.deepEqual(dfs(2, 2, [[1, 2]]), [2, 1]);
    });

    it("three node graph", () => {
        assert.deepEqual(dfs(3, 1, [[1, 2], [2, 3]]), [1, 2, 3]);
        assert.deepEqual(dfs(3, 1, [[1, 2], [1, 3]]), [1, 3, 2]);
        assert.deepEqual(dfs(3, 1, [[1, 3], [1, 2]]), [1, 2, 3]);
        assert.deepEqual(dfs(3, 1, [[1, 3], [2, 3]]), [1, 3, 2]);
        assert.deepEqual(dfs(3, 1, [[1, 3]]), [1, 3]);
        assert.deepEqual(dfs(3, 2, [[1, 3]]), [2]);
    });

    it("four node graph", () => {
        assert.deepEqual(dfs(4, 1, [[1, 2], [1, 3], [3, 4]]), [1, 3, 4, 2]);
    });
});