/**
 * Math helpers: multiplication utilities.
 *
 * This module exports multiplication helpers used by the package.
 *
 * @module
 */

/**
 * Multiply two numbers and return the product.
 *
 * @param a - The first factor.
 * @param b - The second factor.
 * @returns The numeric product of `a` and `b`.
 *
 * @example
 * ```ts
 * import { mul } from "./mul.ts";
 * console.log(mul(2, 3)); // 6
 * ```
 */
function mul(a: number, b: number): number {
  return a * b;
}

export { mul };
