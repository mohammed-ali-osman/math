/**
 * math
 *
 * Module entrypoint that re-exports the public API of the package.
 *
 * @example
 * ```ts
 * import { add, sub } from "./mod.ts";
 * console.log(add(2,3)); // 5
 * ```
 *
 * @module
 */

import { add } from "./add.ts";
import { sub } from "./sub.ts";
import { mul } from "./mul.ts";
import { div } from "./div.ts";
import { pow } from "./pow.ts";

export { add, div, mul, pow, sub };
