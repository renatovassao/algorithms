/**
 * Helper function to recursively traverse graph
 *
 * @param {number} node current node running dfs
 * @param {[number[]]} graph graph in the form of edges[i] are the children of the ith node
 * @param {number[]} visited array of visited nodes
 * @param {number[]} stack stack for dfs traversing
 */
function dfs(node, graph, visited, stack) {
    visited[node] = true;

    for (const child of graph[node]) {
        if (!visited[child]) {
            dfs(child, graph, visited, stack);
        }
    }

    stack.push(node);
}

/**
 * Return one topological sort for a directed acyclic graph (DAG)
 *
 * @param {number} n number of nodes in the graph
 * @param {[number, number][]} edges edges in the form of [from, to]
 * @returns {number[]}
 */
export function topologicalSort(n, edges) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [n1, n2] of edges) {
        graph[n1].push(n2);
    }

    const visited = new Array(n + 1).fill(false);
    const stack = [];

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            dfs(i, graph, visited, stack);
        }
    }

    stack.reverse();

    return stack;
}