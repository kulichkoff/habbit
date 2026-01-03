import { TrackType } from './track-type.enum';
import { TrackUnitModel } from './track-unit.model';

export interface BoardModel {
  type: TrackType;
  trackedList: TrackUnitModel[];
}
