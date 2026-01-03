import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { fibonacci } from "../challenges/id_145_nth_fibonacci_number/solution.js";

Deno.test("fibonacci - test 4", () => {
  assertEquals(fibonacci(4), 2);
});

Deno.test("fibonacci - test 10", () => {
  assertEquals(fibonacci(10), 34);
});

Deno.test("fibonacci - test 15", () => {
  assertEquals(fibonacci(15), 377);
});

Deno.test("fibonacci - test 40", () => {
  assertEquals(fibonacci(40), 63245986);
});

Deno.test("fibonacci - test 75", () => {
  assertEquals(fibonacci(75), 1304969544928657);
});
