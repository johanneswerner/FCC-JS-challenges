import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { nthFibonacci } from "../challenges/id_145_nth_fibonacci_number/solution.js";

Deno.test("nthFibonacci - test 4", () => {
  assertEquals(nthFibonacci(4), 2);
});

Deno.test("nthFibonacci - test 10", () => {
  assertEquals(nthFibonacci(10), 34);
});

Deno.test("nthFibonacci - test 15", () => {
  assertEquals(nthFibonacci(15), 377);
});

Deno.test("nthFibonacci - test 40", () => {
  assertEquals(nthFibonacci(40), 63245986);
});

Deno.test("nthFibonacci - test 75", () => {
  assertEquals(nthFibonacci(75), 1304969544928657);
});
