import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { BoardsState, CreateBoard, TrackType } from '@front/entities/habit-track';

@Component({
  selector: 'app-boards-list',
  imports: [AsyncPipe, ScrollingModule, MatButtonModule],
  templateUrl: './boards-list.component.html',
  styleUrl: './boards-list.component.scss',
})
export class BoardsListComponent {
  private readonly store = inject(Store);

  boards$ = this.store.select(BoardsState.getBoards);

  protected onCreateNewBtn() {
    // TODO open modal or drawer
    this.store.dispatch(
      new CreateBoard({
        type: TrackType.SingleCheck,
        name: 'Default board',
        trackedList: [],
      }),
    );
  }
}
