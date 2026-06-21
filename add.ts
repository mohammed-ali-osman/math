/**
 * Math helpers: addition utilities.
 *
 * This module exports a small set of addition helpers used by the package.
 *
 * @module
 */

/**
 * Add two numbers and return the result.
 *
 * @param a - The first addend.
 * @param b - The second addend.
 * @returns The numeric sum of `a` and `b`.
 *
 * @example
 * ```ts
 * import { add } from "./add.ts";
 * console.log(add(1, 2)); // 3
 * ```
 */
function add(a: number, b: number): number {
  return a + b;
}

export { add };
