/**
 * Given an array and an integer k, return the array rotated after k rounds
 *
 * @param {number[]} arr input array
 * @param {number[]} k number of rotations
 * @returns {number[]} minimum amount of platforms
 */
export function rotation(arr, k) {
    let res = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        res[(i + k) % arr.length] = arr[i];
    }

    return res;
}