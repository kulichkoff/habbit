import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { provideStore } from '@ngxs/store';

import { SettingsState } from '@front/entities/settings';
import { BoardsState, BoardsStateModel } from '@front/entities/habit-track';
import { routes } from './app.routes';
import { environment } from '@front/environments';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(
      [SettingsState, BoardsState],
      withNgxsReduxDevtoolsPlugin(),
      withNgxsLoggerPlugin({
        disabled: environment.production,
      }),
      withNgxsStoragePlugin({
        keys: [SettingsState, BoardsState],
        afterDeserialize: (obj, key) => {
          if (key === BoardsState.name) {
            // TODO move to separate file
            // TODO think about performance
            const state: BoardsStateModel = obj;
            const boards = Object.values(state.boards);
            for (const board of boards) {
              for (const tracks of board.trackedList) {
                tracks.checkDate = new Date(tracks.checkDate as unknown as string);
              }
            }
            return obj;
          }
          return obj;
        },
      }),
    ),
  ],
};
