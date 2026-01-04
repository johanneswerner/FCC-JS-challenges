import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { isLeapYear } from "../challenges/id_147_leap_year_calculator/solution.js";

Deno.test("isLeapYear - test 2024", () => {
  assertEquals(isLeapYear(2024), true);
});

Deno.test("isLeapYear - test 2023", () => {
  assertEquals(isLeapYear(2023), false);
});

Deno.test("isLeapYear - test 2100", () => {
  assertEquals(isLeapYear(2100), false);
});

Deno.test("isLeapYear - test 2000", () => {
  assertEquals(isLeapYear(2000), true);
});

Deno.test("isLeapYear - test 1999", () => {
  assertEquals(isLeapYear(1999), false);
});

Deno.test("isLeapYear - test 2040", () => {
  assertEquals(isLeapYear(2040), true);
});

Deno.test("isLeapYear - test 2026", () => {
  assertEquals(isLeapYear(2026), false);
});
