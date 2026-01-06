import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { CheckerBoardComponent } from '@front/entities/checker-board';
import { BoardModel, TrackType } from '@front/entities/habit-track';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckInService } from '@front/features/check-in';
import { compareCalendarDate } from '@front/shared/date';

@Component({
  selector: 'app-habit-dashboard',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CheckerBoardComponent,
    MatFormFieldModule,
  ],
  templateUrl: './habit-dashboard.component.html',
  styleUrl: './habit-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitDashboardComponent {
  private readonly checkInService = inject(CheckInService);

  board = input.required<BoardModel>();

  protected hasCheckedToday = computed<boolean>(() =>
    this.board().trackedList.some(check => compareCalendarDate(check.checkDate, new Date()) === 0),
  );

  protected disabledTodayCheckIn = computed<boolean>(
    () => this.hasCheckedToday() && this.board().type !== TrackType.MultiCheck,
  );

  protected checkInToday(): void {
    this.checkIn(new Date());
  }

  protected checkIn(date: Date): void {
    this.checkInService.checkIn(this.board().id, date);
  }
}
