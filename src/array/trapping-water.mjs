/**
 * Find the number of water trapped between an elevation map, using 1 as one unit of water
 *
 * @param {number[]} arr elevation map
 * @returns {number} number
 */
export function trappingWater(arr) {
    let total = 0;
    let prev = arr[0];
    let tmp = 0;
    let prev_idx = 0;

    for (let i = 1; i < arr.length; i++) {
        if (prev <= arr[i]) {
            prev = arr[i];
            prev_idx = i;
            tmp = 0;
        } else {
            total += prev - arr[i];
            tmp += prev - arr[i];
        }
    }

    if (prev_idx === arr.length - 1) {
        return total;
    }

    total -= tmp;
    prev = arr[arr.length - 1];

    for (let i = arr.length - 1; i > prev_idx; i--) {
        if (prev < arr[i]) {
            prev = arr[i];
        } else {
            total += prev - arr[i];
        }
    }

    return total;
}