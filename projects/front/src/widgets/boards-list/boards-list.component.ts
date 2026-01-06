import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { BoardModel, BoardsState, CreateBoard, SelectBoard } from '@front/entities/habit-track';
import { CreateBoardService } from '@front/features/create-board';
import { take } from 'rxjs';
import { CheckerBoardComponent } from '@front/entities/checker-board';

@Component({
  selector: 'app-boards-list',
  imports: [AsyncPipe, ScrollingModule, MatButtonModule, CheckerBoardComponent],
  templateUrl: './boards-list.component.html',
  styleUrl: './boards-list.component.scss',
})
export class BoardsListComponent {
  private readonly store = inject(Store);
  private readonly createBoardService = inject(CreateBoardService);

  boards$ = this.store.select(BoardsState.getBoards);

  protected onCreateNewBtn() {
    this.createBoardService
      .startProcessDialog()
      .pipe(take(1))
      .subscribe(board => {
        if (!board) {
          return;
        }
        this.store.dispatch(new CreateBoard(board));
      });
  }

  protected onSelectBoard(board: BoardModel) {
    this.store.dispatch(new SelectBoard(board.id));
  }
}
