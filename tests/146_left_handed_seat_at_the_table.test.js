import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { findLeftHandedSeats } from "../challenges/id_146_left_handed_seat_at_the_table/solution.js";

Deno.test("find left-handed seats - test 1", () => {
    assertEquals(findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]), 2);
});

Deno.test("find left-handed seats - test 2", () => {
    assertEquals(findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]]), 8);
});

Deno.test("find left-handed seats - test 3", () => {
    assertEquals(findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]]), 0);
});

Deno.test("find left-handed seats - test 4", () => {
    assertEquals(findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]]), 1);
});

Deno.test("find left-handed seats - test 5", () => {
    assertEquals(findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]]), 5);
});
