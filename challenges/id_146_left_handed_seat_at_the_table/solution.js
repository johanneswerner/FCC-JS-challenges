/**
 * Determine the number of left-handed seats at the table
 * @param {string[][]} table - The seating arrangement of the table
 * @returns {number} The number of left-handed seats
 */
export function findLeftHandedSeats(table) {
  let result = 0;
  table[0].reverse();

  table.forEach((sublist) => {
    if (sublist[0] === "U") {
      result += 1;
    }
    sublist.forEach((seat, i) => {
      if (i < sublist.length - 1 && seat !== "R" && sublist[i + 1] === "U") {
        result += 1;
      }
    });
  });

  return result;
}
