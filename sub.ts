/**
 * Math helpers: subtraction utilities.
 *
 * This module exports subtraction helpers used by the package.
 *
 * @module
 */

/**
 * Subtract `b` from `a` and return the result.
 *
 * @param a - The minuend.
 * @param b - The subtrahend.
 * @returns The numeric difference `a - b`.
 *
 * @example
 * ```ts
 * import { sub } from "./sub.ts";
 * console.log(sub(5, 2)); // 3
 * ```
 */
function sub(a: number, b: number): number {
    return a - b;
}

export { sub };