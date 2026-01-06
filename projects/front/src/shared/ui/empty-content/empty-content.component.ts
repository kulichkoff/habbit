import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-empty-content',
  imports: [MatIconModule],
  template: `
    <mat-icon>info</mat-icon>
    <p>Looks like there are no boards here. Let's create a new one</p>
  `,
  styles: `
    :host {
      opacity: 0.6;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }

    mat-icon {
      font-size: 4rem;
      width: fit-content;
      height: fit-content;
    }

    p {
      text-align: center;
      width: 280px;
      font-size: 1.1rem;
    }
  `,
})
export class EmptyContentComponent {}
