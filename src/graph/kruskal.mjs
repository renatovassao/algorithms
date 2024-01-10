/**
 * Calculate a MST (Minimum Spanning Tree) of the graph using Kruskal's algorithm
 *
 * @param {number} n number of nodes in the graph
 * @param {[number, number, number][]} edges edges in the form of [from, to, weight]
 * @returns {number[]} tree in the form of i connects to edge[i];
 */
export function kruskal(n, edges) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [n1, n2, w] of edges) {
        graph[n1].push([n2, w]);
        graph[n2].push([n1, w]);
    }

    edges.sort(([, , w1], [, , w2]) => w1 - w2);

    const parent = new Array(n + 1);
    let total = 0;

    for (const [u, v, weight] of edges) {
        if (!parent[u] && !parent[v]) {
            parent[u] = u;
            parent[v] = u;
        } else if (!parent[u] && parent[v]) {
            parent[u] = parent[v];
        } else if (parent[u] && !parent[v]) {
            parent[v] = parent[u];
        } else if (parent[u] !== parent[v]) {
            const old = parent[u];

            for (let i = 1; i <= n; i++) {
                if (parent[i] === old) {
                    parent[i] = parent[v];
                }
            }
        } else {
            // cycle
            continue;
        }

        total += weight;
    }

    return total;
}