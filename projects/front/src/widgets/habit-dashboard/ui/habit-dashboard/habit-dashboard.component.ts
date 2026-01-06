import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CheckerBoardComponent } from '@front/entities/checker-board';
import { BoardModel } from '@front/entities/habit-track';

@Component({
  selector: 'app-habit-dashboard',
  imports: [CheckerBoardComponent],
  templateUrl: './habit-dashboard.component.html',
  styleUrl: './habit-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitDashboardComponent {
  board = input.required<BoardModel>();
}
