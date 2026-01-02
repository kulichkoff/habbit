import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { selectProviderGuard } from './select-provider.guard';
import { Store } from '@ngxs/store';
import { StorageProvider } from '@front/entities/settings';

const mockStore = {
  selectSnapshot: vi.fn(),
};

const mockRouter = {
  navigate: vi.fn(),
};

describe('selectProviderGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => selectProviderGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: Router, useValue: mockRouter },
      ],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should activate route when provider is defined', () => {
    mockStore.selectSnapshot.mockReturnValue(StorageProvider.localStorage);
    //@ts-expect-error because no arguments expected
    const canActivate = executeGuard();
    expect(canActivate).toBe(true);
    expect(mockRouter.navigate).not.toBeCalled();
  });

  it('should navigate when provider is not defined', () => {
    mockStore.selectSnapshot.mockReturnValue(undefined);
    //@ts-expect-error because no arguments expected
    const canActivate = executeGuard();
    expect(canActivate).toBe(false);
    expect(mockRouter.navigate).toBeCalled();
  });

  it('should navigate to right route', () => {
    mockStore.selectSnapshot.mockReturnValue(undefined);
    //@ts-expect-error because no arguments expected
    executeGuard();
    expect(mockRouter.navigate).toBeCalledWith(['providers', 'select']);
  });
});
