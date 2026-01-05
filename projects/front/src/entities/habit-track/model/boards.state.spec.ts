import { TestBed } from '@angular/core/testing';
import { provideStore, Store } from '@ngxs/store';
import { beforeEach, describe, expect, it } from 'vitest';
import { BoardsState } from './boards.state';
import { CreateBoard } from './board.actions';
import { TrackType } from './track-type.enum';
import { firstValueFrom } from 'rxjs';

describe('BoardsState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([BoardsState])],
    });
    store = TestBed.inject(Store);
  });

  describe('#createBoard()', () => {
    it('should add board into state', async () => {
      const board = {
        type: TrackType.SingleCheck,
        trackedList: [],
        name: 'Test',
      };
      await firstValueFrom(store.dispatch(new CreateBoard(board)));

      const boards = store.selectSnapshot(BoardsState.getBoards);
      expect(boards).toContainEqual({
        ...board,
        id: 0,
      });
    });

    it('should use correct id', async () => {
      const board = {
        type: TrackType.SingleCheck,
        trackedList: [],
        name: 'Test',
      };
      await firstValueFrom(store.dispatch(new CreateBoard(board)));
      await firstValueFrom(store.dispatch(new CreateBoard(board)));
      await firstValueFrom(store.dispatch(new CreateBoard(board)));

      let boards = store.selectSnapshot(BoardsState.getBoards);
      const ids = boards.map(b => b.id);
      expect(ids).toEqual([0, 1, 2]);

      await firstValueFrom(store.dispatch(new CreateBoard(board)));
      boards = store.selectSnapshot(BoardsState.getBoards);
      const lastBoard = boards.pop();
      expect(lastBoard?.id).toBe(3);
    });
  });
});
