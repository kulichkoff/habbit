import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SettingsState } from '@front/entities/settings';
import { Store } from '@ngxs/store';

export const selectProviderGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  const provider = store.selectSnapshot(SettingsState.getStorageProvider);
  if (!provider) {
    router.navigate(['providers', 'select']);
    return false;
  }
  return true;
};
