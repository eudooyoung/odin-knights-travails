const knightMovesBFS = (start, end) => {
  const graph = buildGraph();
  const visited = new Set();
  const queue = [];
  let head = 0;
  let depth = 0;
  let path = [];
  const startStr = JSON.stringify(start);
  const endStr = JSON.stringify(end);

  visited.add(startStr);
  queue.push({ vertex: startStr, depth: 0, path: [startStr] });

  while (head < queue.length) {
    const current = queue[head++];
    const currentVertex = current.vertex;
    const currentDepth = current.depth;
    const currentPath = current.path;
    // base case
    if (currentVertex === endStr) {
      depth = currentDepth;
      path = currentPath;
      break;
    }

    const neighbors = graph.get(currentVertex);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({
          vertex: neighbor,
          depth: currentDepth + 1,
          path: currentPath.concat([neighbor]),
        });
      }
    }
  }

  return { depth, path };
};

export const nextVertices = (current) => {
  let currentX = current[0];
  let currentY = current[1];
  const deltas = delta(currentX, currentY);
  const next = [];
  for (let delta of deltas) {
    const nextX = delta[0];
    const nextY = delta[1];
    if (isInRange(nextX, nextY)) {
      next.push(JSON.stringify(delta));
    }
  }
  return next;
};

export const delta = (x, y) => {
  return [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];
};

export const isInRange = (x, y) => {
  if (x < 0 || y < 0) {
    return false;
  }

  if (x > 7 || y > 7) {
    return false;
  }

  return true;
};

export const buildGraph = () => {
  const graph = new Map();
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      const vertex = [x, y];
      const key = JSON.stringify(vertex);
      const next = nextVertices(vertex);
      graph.set(key, next);
    }
  }
  return graph;
};

const resultBFS = knightMovesBFS([0, 0], [7, 7]);
console.log(`It takes ${resultBFS.depth} moves as follows:`);
resultBFS.path.forEach((path) => {
  console.log(path);
});
