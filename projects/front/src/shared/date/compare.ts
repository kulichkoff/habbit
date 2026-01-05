/**
 * Compares two calendar dates and returns the number of days between them.
 * Time-of-day is ignored.
 *
 * @param {Date} a
 * @param {Date} b
 * @returns {number} Number of days between a and b
 */
export function compareCalendarDate(a: Date, b: Date): number {
  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.round((utcA - utcB) / MS_PER_DAY);
}
