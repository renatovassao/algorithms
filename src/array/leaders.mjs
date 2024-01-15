/**
 * Return the number of leaders in the input array.
 *
 * An element is said to be leader if it is greater than all to its right side.
 *
 * @param {number[]} arr input array
 * @returns {number} amount of leaders in input array
 */
export function leaders(arr) {
    let max = 0;
    let count = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (max < arr[i]) {
            max = arr[i];
            count += 1;
        }
    }

    return count;
}