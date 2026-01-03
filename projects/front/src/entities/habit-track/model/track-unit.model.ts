import { TrackType } from './track-type.enum';

export interface TrackUnitModel {
  type: TrackType;
  checkDate: Date;
}

export interface DurationTrackUnitModel extends TrackUnitModel {
  type: TrackType.TimeBoard;
  durationStart: Date;
  durationEnd: Date;
}
