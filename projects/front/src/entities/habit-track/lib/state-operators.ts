import { StateOperator } from '@ngxs/store';

export interface HasCheckDate {
  checkDate: string | Date;
}

export function insertAndSortByCheckDate<T extends HasCheckDate>(
  item: T,
  direction: 'asc' | 'desc' = 'asc',
): StateOperator<T[]> {
  return (state: readonly T[] = []) => {
    const newState = [...state, item];

    return newState.sort((a, b) => {
      const dateA = new Date(a.checkDate).getTime();
      const dateB = new Date(b.checkDate).getTime();

      return direction === 'asc' ? dateA - dateB : dateB - dateA;
    });
  };
}
