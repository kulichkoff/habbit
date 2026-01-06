import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BoardModel, BoardsStateModel } from './board.model';
import { CheckIn, CreateBoard, SelectBoard } from './board.actions';
import { patch } from '@ngxs/store/operators';
import { TrackUnitModel } from './track-unit.model';
import { insertAndSortByCheckDate } from '../lib';

type ThisContext = StateContext<BoardsStateModel>;

@State<BoardsStateModel>({
  name: BoardsState.name,
  defaults: {
    boards: {},
  },
})
@Injectable()
export class BoardsState {
  static readonly name = 'boards';

  @Selector()
  static getBoards(state: BoardsStateModel): BoardModel[] {
    return Object.values(state.boards);
  }

  @Selector()
  static getSelectedBoard(state: BoardsStateModel): BoardModel | undefined {
    if (!state.selectedBoardId) {
      return;
    }
    return state.boards[state.selectedBoardId];
  }

  @Action(CreateBoard)
  createBoard(ctx: ThisContext, action: CreateBoard): void {
    const lastId = Object.keys(ctx.getState().boards).pop() || -1;
    const id = +lastId + 1;
    ctx.setState(
      patch({
        boards: patch({
          [id]: {
            ...action.board,
            trackedList: [],
            id,
          },
        }),
      }),
    );
  }

  @Action(SelectBoard)
  selectBoard(ctx: ThisContext, action: SelectBoard): void {
    ctx.patchState({
      selectedBoardId: action.boardId,
    });
  }

  @Action(CheckIn)
  checkIn(ctx: ThisContext, action: CheckIn): void {
    const board = ctx.getState().boards[action.boardId];
    if (!board) {
      throw new Error('No board with id ' + action.boardId);
    }
    const newCheck: TrackUnitModel = {
      type: board.type,
      checkDate: action.checkDate,
    };

    ctx.setState(
      patch({
        boards: patch({
          [board.id]: patch({
            trackedList: insertAndSortByCheckDate(newCheck),
          }),
        }),
      }),
    );
  }
}
