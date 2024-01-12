/**
 * Find the missing number in an array of length n-1 containing numbers in [1, n] without duplicates
 *
 * @param {number[]} arr input array
 * @returns {number} missing number
 */
export function missingNumber(arr) {
    let total = 1;

    for (let i = 0; i < arr.length; i++) {
        total += (i + 2) - arr[i];
    }

    return total;
}