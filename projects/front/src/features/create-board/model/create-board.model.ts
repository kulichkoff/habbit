import { BoardModel } from '@front/entities/habit-track';

export type CreateBoardModel = Omit<BoardModel, 'id'>;
