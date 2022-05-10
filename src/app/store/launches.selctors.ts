import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LaunchState } from './launches.state';

export const LAUNCHES_STATE_NAME = 'launches';

export const getLaunchesState =
  createFeatureSelector<LaunchState>(LAUNCHES_STATE_NAME);
export const getLaunches = createSelector(getLaunchesState, (state) => {
  return state?.launches;
});
