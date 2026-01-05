import { Component, inject } from '@angular/core';
import { BoardsListComponent } from '@front/widgets/boards-list';
import { CheckerBoardComponent } from '@front/entities/checker-board';
import { Store } from '@ngxs/store';
import { BoardsState } from '@front/entities/habit-track';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-checker-page',
  imports: [AsyncPipe, BoardsListComponent, CheckerBoardComponent],
  templateUrl: './checker-page.component.html',
  styleUrl: './checker-page.component.scss',
})
export class CheckerPageComponent {
  private readonly store = inject(Store);

  protected selectedBoard$ = this.store.select(BoardsState.getSelectedBoard);
}
