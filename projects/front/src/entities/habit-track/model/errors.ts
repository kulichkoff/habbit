export class ErrorNoBoard extends Error {
  constructor(public readonly boardId: number) {
    super(`There is no board with provided ID ${boardId}`);
  }
}
