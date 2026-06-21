import { sub } from "../sub.ts";
import { assertEquals } from "@std/assert";

Deno.test("addition", () => {
  assertEquals(sub(1, 1), 0);
});
