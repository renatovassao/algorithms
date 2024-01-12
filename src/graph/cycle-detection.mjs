/**
 * Helper function to recursively traverse graph
 *
 * @param {number} node current node running dfs
 * @param {[number[]]} graph graph in the form of edges[i] are the children of the ith node
 * @param {number[]} visited array of visited nodes
 * @param {number[]} stack stack for dfs traversing
 * @returns {boolean} true if cycle is detected and false otherwise
 */
function dfs(node, graph, visited, stack) {
    if (stack[node]) {
        return true;
    }

    visited[node] = true;
    stack[node] = true;

    for (const child of graph[node]) {
        if (dfs(child, graph, visited, stack)) {
            return true;
        }
    }

    stack[node] = false;

    return false;
}

/**
 * Return true if a directed graph contains a cycle of false otherwise
 *
 * @param {number} n number of nodes in the graph
 * @param {[number, number][]} edges edges in the form of [from, to]
 * @returns {boolean}
 */
export function cycleDetection(n, edges) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [n1, n2] of edges) {
        graph[n1].push(n2);
    }

    const visited = new Array(n + 1).fill(false);
    const stack = new Array(n + 1).fill(false);

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            if (dfs(i, graph, visited, stack)) {
                return true;
            }
        }
    }

    return false;
}