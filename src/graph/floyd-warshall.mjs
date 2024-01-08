/**
 * Calculate the shortest distance from all vertices to all vertices
 *
 * @param {number} n number of nodes in the graph
 * @param {number[][]} weight weight matrix from node i to j
 * @returns {number[][]} shortest distance from every node to every node
 */
export function floydWarshall(n, weight) {
    const dist = Array.from({ length: n }, () => new Array(n));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dist[i][j] = weight[i][j];
        }
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}