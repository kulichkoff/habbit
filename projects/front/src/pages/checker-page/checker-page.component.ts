import { Component } from '@angular/core';
import { BoardsListComponent } from '@front/widgets/boards-list';

@Component({
  selector: 'app-checker-page',
  imports: [BoardsListComponent],
  templateUrl: './checker-page.component.html',
  styleUrl: './checker-page.component.scss',
})
export class CheckerPageComponent {}
