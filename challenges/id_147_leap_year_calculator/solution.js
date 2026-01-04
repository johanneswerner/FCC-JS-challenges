/**
 *Determine whether a year is a leap year
 * @param {number} year - The year to check
 * @returns {boolean} a boolean indicating whether the year is a leap year
 */
export function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
