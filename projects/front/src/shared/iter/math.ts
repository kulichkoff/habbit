export function findMaxNumber(list: number[]): number {
  let max = -1;

  for (const n of list) {
    if (!max || n > max) {
      max = n;
    }
  }

  return max;
}

/**
 *
 * @param list
 * @returns minimal non-zero number or -1 if list is empty
 */
export function findMinNzNumber(list: number[]): number {
  let max = -1;

  for (const n of list) {
    if (n === 0) continue;
    if (!max || n < max) {
      max = n;
    }
  }

  return max;
}
