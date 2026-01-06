import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-board-confirmation',
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Are you sure?</h2>
    <mat-dialog-content>
      <p>You are about to delete the board and all related information</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton [mat-dialog-close]="false">Cancel</button>
      <button matButton="filled" [mat-dialog-close]="true">Delete</button>
    </mat-dialog-actions>
  `,
  styles: ``,
})
export class DeleteBoardConfirmationComponent {}
