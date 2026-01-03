/**
 * Determine the number of left-handed seats at the table
 * @param {string[][]} table - The seating arrangement of the table
 * @returns {number} The number of left-handed seats
 */
export function findLeftHandedSeats(table) {
  let result = 0;
  table[0].reverse();

  for (let sublist of table) {
    if (sublist[0] === "U") {
      result += 1;
    }
    for (let i = 0; i < sublist.length - 1; i++) {
      if (sublist[i] !== "R" && sublist[i + 1] === "U") {
        result += 1;
      }
    }
  }

  return result;
}
