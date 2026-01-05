import { describe, expect, it } from 'vitest';
import { findMaxNumber } from './math';

describe('iter/math', () => {
  describe('#findMaxNumber()', () => {
    it('should return max number from the list', () => {
      const testCases: {
        inList: number[];
        expected: number;
      }[] = [
        {
          inList: [28, -9, -999, 44, 7],
          expected: 44,
        },
      ];

      for (const tc of testCases) {
        const result = findMaxNumber(tc.inList);
        expect(result).toBe(tc.expected);
      }
    });
  });

  describe('#findMinNzNumber()', () => {
    it('should return min non zero number from the list', () => {
      const testCases: {
        inList: number[];
        expected: number;
      }[] = [
        {
          inList: [28, -9, -999, 44, 7],
          expected: -999,
        },
        {
          inList: [0, 1, 2, 3, 0, 4],
          expected: 1,
        },
      ];

      for (const tc of testCases) {
        const result = findMaxNumber(tc.inList);
        expect(result).toBe(tc.expected);
      }
    });
  });
});
