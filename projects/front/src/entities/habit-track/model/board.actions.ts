import { BoardModel } from './board.model';

const TOKEN = '[Boards]';

export class CreateBoard {
  static readonly type = `${TOKEN} Create board`;

  constructor(public readonly board: Omit<BoardModel, 'id'>) {}
}

export class SelectBoard {
  static readonly type = `${TOKEN} Select board`;

  constructor(public readonly boardId: number) {}
}
