import { describe, expect, it } from 'vitest';
import { compareCalendarDate } from './compare';

describe('date/compare', () => {
  describe('#compareCalendarDate()', () => {
    it('should return 0 when dates are same in calendar', () => {
      const testCases: {
        inA: Date;
        inB: Date;
        expected: number;
      }[] = [
        {
          inA: new Date('2024-08-09'),
          inB: new Date('2024-08-09'),
          expected: 0,
        },
        {
          inA: new Date('1980-01-30'),
          inB: new Date('1980-01-30'),
          expected: 0,
        },
      ];

      for (const tc of testCases) {
        const result = compareCalendarDate(tc.inA, tc.inB);
        expect(result).toBe(tc.expected);
      }
    });

    it('should return negative days number if B is after A', () => {
      const testCases: {
        inA: Date;
        inB: Date;
        expected: number;
      }[] = [
        {
          inA: new Date('2024-08-07'),
          inB: new Date('2024-08-09'),
          expected: -2,
        },
        {
          inA: new Date('1980-01-27'),
          inB: new Date('1980-01-31'),
          expected: -4,
        },
        {
          inA: new Date('2026-01-28'),
          inB: new Date('2026-02-04'),
          expected: -7,
        },
      ];

      for (const tc of testCases) {
        const result = compareCalendarDate(tc.inA, tc.inB);
        expect(result).toBe(tc.expected);
      }
    });

    it('should return positive days number if A is after B', () => {
      const testCases: {
        inA: Date;
        inB: Date;
        expected: number;
      }[] = [
        {
          inA: new Date('2024-08-09'),
          inB: new Date('2024-08-07'),
          expected: 2,
        },
        {
          inA: new Date('1980-01-28'),
          inB: new Date('1980-01-20'),
          expected: 8,
        },
        {
          inA: new Date('2026-02-04'),
          inB: new Date('2026-01-28'),
          expected: 7,
        },
      ];

      for (const tc of testCases) {
        const result = compareCalendarDate(tc.inA, tc.inB);
        expect(result).toBe(tc.expected);
      }
    });
  });
});
