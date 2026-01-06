import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { TrackType } from '@front/entities/habit-track';

@Component({
  selector: 'app-create-board-dialog',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './create-board-dialog.component.html',
  styleUrl: './create-board-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBoardDialogComponent {
  private readonly fb = inject(FormBuilder);

  protected createBoardForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    type: TrackType.SingleCheck,
  });

  protected getErrorMessage(control: AbstractControl): string | undefined {
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }
}
