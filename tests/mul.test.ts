import { mul } from "../mul.ts";
import { assertEquals } from "@std/assert";

Deno.test("multiplication", () => {
  assertEquals(mul(2, 3), 6);
});
