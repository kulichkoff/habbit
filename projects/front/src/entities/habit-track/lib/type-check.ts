import { DurationTrackUnitModel, TrackType, TrackUnitModel } from '../model';

export function isDurationTrack(trackUnit: TrackUnitModel): trackUnit is DurationTrackUnitModel {
  return trackUnit.type === TrackType.TimeBoard;
}
