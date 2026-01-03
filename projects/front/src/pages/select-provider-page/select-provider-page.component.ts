import { first } from 'rxjs';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Store } from '@ngxs/store';

import { SetStorageProvider, StorageProvider } from '@front/entities/settings';

@Component({
  selector: 'app-select-provider-page',
  imports: [MatButtonModule, MatTooltipModule],
  templateUrl: './select-provider-page.component.html',
  styleUrl: './select-provider-page.component.scss',
})
export class SelectProviderPageComponent {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  protected StorageProvider = StorageProvider;

  protected chooseProvider(provider: StorageProvider) {
    this.store
      .dispatch(new SetStorageProvider(provider))
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['checker']);
      });
  }
}
