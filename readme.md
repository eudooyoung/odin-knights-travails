### Odin Project on Graph: Knights Travails

installed packages are as follows:

- eslint
- prettier
- eslint-config-prettier
- jest
- babel

npm scripts are added:

- test: run jest

#### Problem:

Given two squares start and end on chessboard, return the shortest path via knight moves between the two.

#### Approach:

i) Implement delta function that returns a list of next square candidates from a square.

ii) Implement isInRange function that checks if a candidate is on chessboard(0 <= squareX, squareY <= 7)

iii) Implement neighbors function that returns list of valid candidates from a square

iv) Implement buildGraph function that does following:

- i) Creates a map named graph
- ii) Iterates from (0, 0) to (7, 7) setting each vertex as key and its neighbors as value of the map
- iii) Return the map

v) Implement knightMoves function that does following:

- i) Build a graph
- ii) Create an instance of Set to track visited squares
- iii) Convert argument vertices to keys in string
- iv) Create an array that will act as a queue and push initial state: { key: start key, path: [start key] } into it
- v) Create a loop that is run while queue is not empty and does following:
  - i) Put out current state
  - ii) If current key matches end key, assign current path to result and break the loop
  - iii) If not, add current key to visited set
  - iv) Get current key's neighbors from graph
  - v) Traversing neighbors, push next state { key: neighbor, path: [...currentPath, neighbor] } into the queue only if the neighbor hasn't been visited
- vi) Return result path
