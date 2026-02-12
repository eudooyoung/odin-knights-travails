const knightMoves = (start, end) => {
  const graph = buildGraph();
  const visited = new Set();
  const queue = [];
  let head = 0;
  let path = [];
  const startKey = JSON.stringify(start);
  const endKey = JSON.stringify(end);

  queue.push({ key: startKey, path: [startKey] });

  while (head < queue.length) {
    const current = queue[head++];
    const currentKey = current.key;
    const currentPath = current.path;
    // base case
    if (currentKey === endKey) {
      path = currentPath;
      break;
    }

    visited.add(currentKey);
    const neighbors = graph.get(currentKey);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push({ key: neighbor, path: currentPath.concat(neighbor) });
      }
    }
  }

  return path;
};

export const nextVertices = (current) => {
  const currentX = current[0];
  const currentY = current[1];
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
      const next = nextVertices(vertex);
      const key = JSON.stringify(vertex);
      graph.set(key, next);
    }
  }
  return graph;
};

const path = knightMoves([3, 3], [0, 0]);
console.log(`It takes ${path.length - 1} moves as follows:`);
path.forEach((vertex) => {
  console.log(vertex);
});
