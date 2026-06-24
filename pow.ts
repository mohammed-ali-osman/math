/**
 * Raises a base to a power.
 *
 * @param a - The base factor.
 * @param b - The exponent factor.
 * @returns The result product of `a`^`b`.
 *
 * @example
 * ```ts
 * import { mul } from "./mul.ts";
 * console.log(mul(2, 3)); // 8
 * ```
 */

function pow(a: number, b: number): number {
  return Math.pow(a, b);
}

export { pow };
