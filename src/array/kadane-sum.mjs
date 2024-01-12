/**
 * Find a contiguous subarray with maximum sum
 *
 * @param {number[]} arr input array
 * @returns {number} maximum sum
 */
export function kadaneSum(arr) {
    let sum = Number.NEGATIVE_INFINITY;
    let max = 0;

    for (const x of arr) {
        sum = Math.max(x, sum + x);
        max = Math.max(max, sum);
    }

    return max;
}