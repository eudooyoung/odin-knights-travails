import { nextVertices, delta, isInRange, buildGraph } from "./knight-moves.js";

describe("knightMoves test", () => {
  it("functions created", () => {
    expect(nextVertices).toBeDefined();
    expect(delta).toBeDefined();
    expect(isInRange).toBeDefined();
    expect(buildGraph).toBeDefined();
  });

  it("delta function", () => {
    expect(delta(3, 3).sort()).toEqual([
      [1, 2],
      [1, 4],
      [2, 1],
      [2, 5],
      [4, 1],
      [4, 5],
      [5, 2],
      [5, 4],
    ]);
  });

  it("isInRange function", () => {
    expect(isInRange(0, 0)).toBe(true);
    expect(isInRange(-1, 0)).toBe(false);
    expect(isInRange(8, 0)).toBe(false);
  });

  it("nextVertices function", () => {
    expect(nextVertices([3, 3]).sort()).toEqual([
      [1, 2],
      [1, 4],
      [2, 1],
      [2, 5],
      [4, 1],
      [4, 5],
      [5, 2],
      [5, 4],
    ]);

    expect(nextVertices([0, 0]).sort()).toEqual([
      [1, 2],
      [2, 1],
    ]);

    expect(nextVertices([7, 7]).sort()).toEqual([
      [5, 6],
      [6, 5],
    ]);
  });
});
