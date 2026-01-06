import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { AsyncPipe } from '@angular/common';
import { BoardsState } from '@front/entities/habit-track';
import { HabitDashboardComponent } from '@front/widgets/habit-dashboard';
import { BoardsListComponent } from '@front/widgets/boards-list';

@Component({
  selector: 'app-checker-page',
  imports: [AsyncPipe, BoardsListComponent, HabitDashboardComponent],
  templateUrl: './checker-page.component.html',
  styleUrl: './checker-page.component.scss',
})
export class CheckerPageComponent {
  private readonly store = inject(Store);

  protected selectedBoard$ = this.store.select(BoardsState.getSelectedBoard);
}
