/**
 * Find the unvisited node with minimum distance
 *
 * @param {number[]} visited array of visited nodes
 * @param {number[]} distance array of distance to nodes
 * @returns {number} unvisited node with minimum distance or -1 to indicate no node exists
 */
function unvisitedMin(visited, distance) {
    let min = Infinity;
    let node = -1;

    for (let v = 1; v < distance.length; v++) {
        if (!visited[v] && distance[v] < min) {
            node = v;
            min = distance[v];
        }
    }

    return node;
}

/**
 * Calculate the shortest distance to all vertices from a starting node
 *
 * @param {number} n number of nodes in the graph
 * @param {[number, number, number][]} edges edges in the form of [from, to, weight]
 * @param {number} start starting position of the algorithm
 * @returns {number[]} shortest distance to every node from start position
 */
export function dijkstra(n, edges, start) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [n1, n2, w] of edges) {
        graph[n1].push([n2, w]);
        graph[n2].push([n1, w]);
    }

    const visited = new Array(n + 1).fill(false);
    const distance = new Array(n + 1).fill(Infinity);
    distance[start] = 0;

    for (let i = 0; i < n; i++) {
        const node = unvisitedMin(visited, distance);

        if (node === -1) {
            break;
        }

        visited[node] = true;

        for (const [child, weight] of graph[node]) {
            if (distance[node] + weight < distance[child]) {
                distance[child] = distance[node] + weight;
            }
        }
    }

    distance.shift();

    return distance;
}