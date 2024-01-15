function Heap() {
    const heap = [];

    /**
     * Function to get parent index in 0-based heap
     *
     * @param {number} i heap index
     * @returns {number} parent index
     */
    function parent(i) {
        return Math.floor((i - 1) / 2);
    }

    /**
     * Function to get first child in 0-based heap
     *
     * @param {number} i heap index
     * @returns {number} first child index
     */
    function first(i) {
        return i * 2 + 1;
    }

    /**
     * Function to get second child in 0-based heap
     *
     * @param {number} i heap index
     * @returns {number} second child index
     */
    function second(i) {
        return i * 2 + 2;
    }

    /**
     * Function to swap index i and index j in heap
     *
     * @param {number} i first index to swap
     * @param {number} j second index to swap
     */
    function swap(i, j) {
        [heap[i], heap[j]] = [heap[j], heap[i]]
    }

    /**
     * Function to insert x into binary heap
     *
     * @param {number} x number to insert in heap
     */
    function insert(x) {
        let i = heap.length;
        heap[i] = x;

        while (parent(i) >= 0 && heap[parent(i)] < heap[i]) {
            swap(parent(i), i);
            i = parent(i);
        }
    }

    /**
     * Function to remove max element from binary heap
     *
     * @returns {number} x max number of heap
     */
    function pop() {
        swap(0, heap.length - 1);
        const res = heap.pop();

        let i = 0;
        while (heap[i] < heap[first(i)] || heap[i] < heap[second(i)]) {
            if (heap[first(i)] < heap[second(i)]) {
                swap(i, second(i));
                i = second(i);
            } else {
                swap(i, first(i));
                i = first(i);
            }
        }

        return res;
    }

    function toJSON() {
        return heap;
    }

    function length() {
        return heap.length;
    }

    return {
        insert,
        pop,
        toJSON,
        length
    }
}

/**
 * Given an array with no duplicates and an integer k, return the kth smallest element of the array
 *
 * @param {number[]} arr input array
 * @param {number[]} k the position of the element in increasing order
 * @returns {number[]} kth smallest element
 */
export function KthSmallestElement(arr, k) {
    const heap = Heap();

    for (const x of arr) {
        if (heap.length() < k) {
            heap.insert(x);
        } else {
            const y = heap.pop();
            heap.insert(Math.min(x, y));
        }
    }

    return heap.pop();
}