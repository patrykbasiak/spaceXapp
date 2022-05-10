import { createReducer, on } from '@ngrx/store';
import { initialState } from './launches.state';
import * as Actions from './launches.actions';

export const _launchesReducer = createReducer(
  initialState,
  on(Actions.getAllLauchesSuccess, (state, action) => ({
    ...state,
    launches: action.launches,
  })),
  on(Actions.getAllLauchesByQuerySuccess, (state, action) => ({
    ...state,
    launches: action.launches,
  }))
);

