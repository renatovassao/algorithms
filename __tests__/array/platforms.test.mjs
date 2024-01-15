import { describe, it } from 'node:test';
import assert from 'node:assert';
import { platforms } from '../../src/array/platforms.mjs';

describe("platforms", () => {
    it("integer arrays", () => {
        assert.deepEqual(platforms(["10:00"], ["11:00"]), 1);
        assert.deepEqual(platforms(["10:00", "10:30"], ["11:00", "11:10"]), 2);
        assert.deepEqual(platforms(["10:00", "11:30"], ["11:00", "11:40"]), 1);
        assert.deepEqual(platforms(["9:00", "9:40", "9:50", "11:00", "15:00", "18:00"], ["9:10", "12:00", "11:20", "11:30", "19:00", "20:00"]), 3);
    });
});