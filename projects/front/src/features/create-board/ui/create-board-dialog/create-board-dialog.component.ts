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
import { MatSelectModule } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { TrackType } from '@front/entities/habit-track';
import { COLORS } from '../../config';

@Component({
  selector: 'app-create-board-dialog',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
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

  protected COLORS = COLORS;

  protected createBoardForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    type: TrackType.SingleCheck,
    color: '',
  });

  protected getErrorMessage(control: AbstractControl): string | undefined {
    if (control.hasError('required')) {
      return 'You must enter a value';
    }
    return;
  }
}
