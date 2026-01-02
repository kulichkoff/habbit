import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SettingsStateModel, StorageProvider } from './settings.model';
import { SetStorageProvider } from './settings.actions';

type ThisContext = StateContext<SettingsStateModel>;

@Injectable({
  providedIn: 'root',
})
@State<SettingsStateModel>({
  name: SettingsState.name,
  defaults: {},
})
export class SettingsState {
  static name = 'settings';

  @Selector()
  static getStorageProvider(state: SettingsStateModel): StorageProvider | undefined {
    return state.storageProvider;
  }

  @Action(SetStorageProvider)
  setStorageProvider(ctx: ThisContext, action: SetStorageProvider): void {
    ctx.patchState({
      storageProvider: action.provider,
    });
  }
}
