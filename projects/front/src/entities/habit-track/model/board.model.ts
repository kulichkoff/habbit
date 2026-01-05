import { TrackType } from './track-type.enum';
import { TrackUnitModel } from './track-unit.model';

export interface BoardModel {
  id: number;
  name: string;
  type: TrackType;
  trackedList: TrackUnitModel[];
}

export interface BoardsStateModel {
  selectedBoardId?: number;

  /**
   * Map object with Board.id as a key and Board as a value
   */
  boards: Record<number, BoardModel>;
}
