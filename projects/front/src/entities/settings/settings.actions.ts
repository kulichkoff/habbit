import { StorageProvider } from './settings.model';

const TOKEN = '[Settings]';

export class SetStorageProvider {
  static type = `${TOKEN} Set storage provider`;

  constructor(readonly provider: StorageProvider) {}
}
