import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteBoard } from '@front/entities/habit-track';
import { Store } from '@ngxs/store';
import { DeleteBoardConfirmationComponent } from '../ui/delete-board-confirmation';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteBoardService {
  private readonly store = inject(Store);
  private readonly dialog = inject(MatDialog);

  async deleteBoard(boardId: number) {
    const dialogClosed$ = this.dialog.open(DeleteBoardConfirmationComponent).afterClosed();
    const confirmed: boolean = await firstValueFrom(dialogClosed$);

    if (confirmed) {
      this.store.dispatch(new DeleteBoard(boardId));
    }
  }
}
