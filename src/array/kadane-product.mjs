/**
 * Find the maximum product for a contiguous subarray
 *
 * @param {number[]} arr input array
 * @returns {number} maximum product
 */
export function kadaneProduct(arr) {
    let product_max = arr[0];
    let product_min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const tmp = Math.max(arr[i], product_max * arr[i], product_min * arr[i]);
        product_min = Math.min(arr[i], product_max * arr[i], product_min * arr[i]);
        product_max = tmp;
        max = Math.max(max, product_max);
    }

    return max;
}