import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { provideStore } from '@ngxs/store';

import { SettingsState } from '@front/entities/settings';
import { BoardsState } from '@front/entities/habit-track';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(
      [SettingsState, BoardsState],
      withNgxsReduxDevtoolsPlugin(),
      withNgxsLoggerPlugin(),
      withNgxsStoragePlugin({
        keys: [SettingsState, BoardsState],
      }),
    ),
  ],
};
