/**
 * Find the equilibrium index for the input array of length n, or -1 if it does not exists
 *
 * An equilibrium index is and index i such that the sum of all the elements
 * before i is equal to the sum of all the elements after i
 *
 * @param {number[]} arr input array
 * @returns {number} equilibrium index, of -1
 */
export function equilibrium(arr) {
    if (arr.length <= 1) {
        return -1;
    }

    let right = 0;

    for (let i = 1; i < arr.length; i++) {
        right += arr[i];
    }

    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        if (left === right) {
            return i;
        }

        left += arr[i];
        right -= arr[i + 1];
    }

    return -1;
}