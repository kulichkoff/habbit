export enum StorageProvider {
  localStorage = 'localStorage',

}
export interface SettingsStateModel {
  storageProvider?: StorageProvider
}
