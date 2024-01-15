/**
 * Helper function to transform time into minutes
 *
 * @param {string} time time in format of hh:mm
 * @returns {number} minutes
 */
function toMinutes(time) {
    const [h, m] = time.split(":");

    return parseInt(h) * 60 + parseInt(m);
}

/**
 * Given an array of train arrivals and an array of departures, find the minimum number of
 * platforms so that no train waits
 *
 * @param {number[]} arr arrival hours
 * @param {number[]} dep departure hours
 * @returns {number} minimum amount of platforms
 */
export function platforms(arr, dep) {
    const day = new Array(60 * 24).fill(0);

    for (let i = 0; i < arr.length; i++) {
        day[toMinutes(arr[i])] += 1;
        day[toMinutes(dep[i])] -= 1;
    }

    let count = 0;
    let max = -1;

    for (let t = 0; t < day.length; t++) {
        count += day[t];

        if (max < count) {
            max = count;
        }
    }

    return max;
}