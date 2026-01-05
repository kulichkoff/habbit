import { Component, computed, input } from '@angular/core';
import { BoardModel } from '../habit-track';
import { Check } from './model';
import { compareCalendarDate } from '@front/shared/date';

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
    console.log(latestChecks);
    for (let i = totalChecksCount - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(now.getDate() - i);
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
}
