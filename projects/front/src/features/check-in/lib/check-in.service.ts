import { inject, Injectable } from '@angular/core';
import { CheckIn } from '@front/entities/habit-track';
import { Store } from '@ngxs/store';
import { catchError, EMPTY, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckInService {
  private readonly store = inject(Store);

  checkIn(boardId: number, date: Date) {
    this.store.dispatch(new CheckIn(boardId, date)).pipe(
      first(),
      catchError(err => {
        console.error('Failed to checkIn', err);
        return EMPTY;
      }),
    );
  }
}
