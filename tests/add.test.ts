import { add } from "../add.ts";
import { assertEquals } from "@std/assert";

Deno.test("addition", () => {
  assertEquals(add(1, 1), 2);
});
