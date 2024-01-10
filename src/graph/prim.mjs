/**
 * Find the unvisited node with minimum distance
 *
 * @param {number[]} visited array of visited nodes
 * @param {number[]} cost array of cost to add nodes to the forest
 * @returns {number} unvisited node with minimum distance or -1 to indicate no node exists
 */
function unvisitedMin(visited, cost) {
    let min = Infinity;
    let node = -1;

    for (let v = 1; v < cost.length; v++) {
        if (!visited[v] && cost[v] < min) {
            node = v;
            min = cost[v];
        }
    }

    return node;
}

/**
 * Calculate a MST (Minimum Spanning Tree) of the graph using Prim's algorithm
 *
 * @param {number} n number of nodes in the graph
 * @param {[number, number, number][]} edges edges in the form of [from, to, weight]
 * @returns {number[]} tree in the form of i connects to edge[i];
 */
export function prim(n, edges) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [n1, n2, w] of edges) {
        graph[n1].push([n2, w]);
        graph[n2].push([n1, w]);
    }

    const start = Math.floor(1 + Math.random() * n);
    const visited = new Array(n + 1).fill(false);
    const cost = new Array(n + 1).fill(Infinity);
    let total = 0;

    for (const [, weight] of graph[start]) {
        if (weight < cost[start]) {
            cost[start] = weight;
        }
    }

    for (let i = 0; i < n - 1; i++) {
        const node = unvisitedMin(visited, cost);

        visited[node] = true;
        total += cost[node];

        for (const [child, weight] of graph[node]) {
            if (!visited[child] && weight < cost[child]) {
                cost[child] = weight;
            }
        }
    }

    return total;
}