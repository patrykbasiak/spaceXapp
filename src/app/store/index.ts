import { ActionReducerMap } from '@ngrx/store';
import { _launchesReducer } from './launches.reducer';
import { LAUNCHES_STATE_NAME } from './launches.selctors';
import { LaunchState } from './launches.state';

export const rootReducer = {};
export interface AppState {
  launches: LaunchState;
}
export const reducers: ActionReducerMap<AppState> = {
  [LAUNCHES_STATE_NAME]: _launchesReducer,
};
