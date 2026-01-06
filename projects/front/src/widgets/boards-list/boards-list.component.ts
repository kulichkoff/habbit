import { take } from 'rxjs';
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngxs/store';
import { CreateBoardService } from '@front/features/create-board';
import { DeleteBoardService } from '@front/features/delete-board';
import { BoardModel, BoardsState, CreateBoard, SelectBoard } from '@front/entities/habit-track';
import { CheckerBoardComponent } from '@front/entities/checker-board';

@Component({
  selector: 'app-boards-list',
  imports: [
    AsyncPipe,
    ScrollingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CheckerBoardComponent,
  ],
  templateUrl: './boards-list.component.html',
  styleUrl: './boards-list.component.scss',
})
export class BoardsListComponent {
  private readonly store = inject(Store);
  private readonly createBoardService = inject(CreateBoardService);
  private readonly deleteBoardService = inject(DeleteBoardService);

  boards$ = this.store.select(BoardsState.getBoards);
  selectedBoard = this.store.selectSignal(BoardsState.getSelectedBoard);

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

  protected onSelectBoard(board: BoardModel): void {
    this.store.dispatch(new SelectBoard(board.id));
  }

  protected onDeleteBtn(board: BoardModel): void {
    this.deleteBoardService.deleteBoard(board.id);
  }
}
