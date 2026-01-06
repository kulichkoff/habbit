import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateBoardModel } from '../model';
import { MatDialog } from '@angular/material/dialog';
import { CreateBoardDialogComponent } from '../ui/create-board-dialog';

@Injectable({
  providedIn: 'root',
})
export class CreateBoardService {
  private readonly dialog = inject(MatDialog);

  startProcessDialog(): Observable<CreateBoardModel | undefined> {
    const dialog = this.dialog.open(CreateBoardDialogComponent);
    return dialog.afterClosed();
  }
}
