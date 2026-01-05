import { Component, computed, input } from '@angular/core';
import { BoardModel } from '../habit-track';
import { Check } from './model';
import { compareCalendarDate } from '@front/shared/date';
import { findMaxNumber } from '@front/shared/iter';

@Component({
  selector: 'app-checker-board',
  imports: [],
  templateUrl: './checker-board.component.html',
  styleUrl: './checker-board.component.scss',
})
export class CheckerBoardComponent {
  board = input.required<BoardModel>();
  columns = input(14);

  protected checks = computed<Check[]>(() => {
    // It is expected to have Board.trackedList sorted by date

    const now = new Date();
    const todayofWeek = now.getDay(); // 0 is sunday, 1 is monday...
    const daysToCut = 7 - (todayofWeek + 1);
    const totalChecksCount = this.columns() * 7 - daysToCut;
    const latestChecks = this.board().trackedList.slice(-1 * totalChecksCount);

    const checksList: Check[] = [];
    checksList.length = totalChecksCount;
    for (let i = totalChecksCount - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(now.getDate() - (totalChecksCount - 1 - i));
      const checksCount = latestChecks.filter(
        track => compareCalendarDate(date, track.checkDate) === 0,
      ).length;
      checksList[i] = {
        date,
        checksCount,
      };
    }
    return checksList;
  });

  protected maxDayCheck = computed<number>(() => {
    const checksCountList = this.checks().map(check => check.checksCount);
    const max = findMaxNumber(checksCountList);
    return max;
  });

  protected getCellColor(check: Check): string {
    if (check.checksCount === 0) {
      return 'var(--mat-sys-surface-container-highest)';
    }
    const levels = ['#ABC7FF', '#80ACEE', '#518FDB', '#2674CA', '#005CBB'];
    const level = Math.ceil((check.checksCount / this.maxDayCheck()) * levels.length);
    return levels[level - 1];
  }
}
