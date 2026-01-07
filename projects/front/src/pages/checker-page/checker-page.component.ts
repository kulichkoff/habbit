import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngxs/store';
import { AsyncPipe } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BoardsState } from '@front/entities/habit-track';
import { HabitDashboardComponent } from '@front/widgets/habit-dashboard';
import { BoardsListComponent } from '@front/widgets/boards-list';
import { map } from 'rxjs';
import { EmptyContentComponent } from '@front/shared/ui';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-checker-page',
  imports: [
    AsyncPipe,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BoardsListComponent,
    HabitDashboardComponent,
    EmptyContentComponent,
  ],
  templateUrl: './checker-page.component.html',
  styleUrl: './checker-page.component.scss',
})
export class CheckerPageComponent {
  private readonly store = inject(Store);
  private readonly breakpointObserver = inject(BreakpointObserver);

  protected isMobile$ = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
    takeUntilDestroyed(),
    map(state => state.matches),
  );

  protected selectedBoard$ = this.store.select(BoardsState.getSelectedBoard);
  protected havingBoards = toSignal(
    this.store.select(BoardsState.getBoards).pipe(map(boards => boards?.length > 0)),
  );

  protected isSideNavOpen = signal(true);

  protected toggleSideNav() {
    this.isSideNavOpen.update(open => !open);
  }
}
