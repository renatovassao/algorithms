/**
 *
 * @param {number} nodes
 * @param {number} start
 * @param {[number, number][]} edges
 * @returns {number[]}
 */
export function dfs(n, start, edges) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [n1, n2] of edges) {
        graph[n1].push(n2);
        graph[n2].push(n1);
    }

    const queue = [start];
    const visited = new Array(n + 1).fill(false);
    const order = [];

    while (queue.length > 0) {
        const node = queue.pop();

        if (!visited[node]) {
            visited[node] = true;
            order.push(node);

            for (const child of graph[node]) {
                if (!visited[child]) {
                    queue.push(child);
                }
            }
        }
    }

    return order;
}