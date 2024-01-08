import { describe, it } from 'node:test';
import assert from 'node:assert';
import { floydWarshall } from '../../src/graph/floyd-warshall.mjs';

describe("floydWarshall", () => {
    it("three node graphs", () => {
        assert.deepEqual(floydWarshall(3, [
            [0       , 1       , 3       ],
            [Infinity, 0       , 1       ],
            [Infinity, Infinity, 0       ]
        ]), [
            [0       , 1       , 2       ],
            [Infinity, 0       , 1       ],
            [Infinity, Infinity, 0       ]
        ]);
    });

    it("four node graphs", () => {
        assert.deepEqual(floydWarshall(4, [
            [0       , 1       , Infinity, Infinity],
            [Infinity, 0       , 1       , 4       ],
            [Infinity, Infinity, 0       , 1       ],
            [Infinity, Infinity, Infinity, 0       ],
        ]), [
            [0       , 1       , 2       , 3       ],
            [Infinity, 0       , 1       , 2       ],
            [Infinity, Infinity, 0       , 1       ],
            [Infinity, Infinity, Infinity, 0       ],
        ]);
    });
});