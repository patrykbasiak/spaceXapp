import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Launch } from '../shared/models/launch.model';
import { Paginator } from '../shared/models/paginator.model';
import { QueryModel } from '../shared/services/launching.service';

const httpErrorProps = props<{ error: HttpErrorResponse }>();

export const GET_ALL_LAUNCHES = '[launch page] get all launches';
export const GET_ALL_LAUNCHES_SUCCESS =
  '[launch page] get all launches success';
export const GET_ALL_LAUNCHES_FAIL = '[launch page] get all launches fail';
export const GET_ALL_LAUNCHES_BY_QUERY =
  '[launch page] get all launches by query';
export const GET_ALL_LAUNCHES_BY_QUERY_SUCCESS =
  '[launch page] get all launches  by query success';
export const GET_ALL_LAUNCHES_BY_QUERY_FAIL =
  '[launch page] get all launches  by query fail';

export const getAllLaunches = createAction(
  GET_ALL_LAUNCHES,
  props<{ page: number; size: number }>()
);
export const getAllLauchesSuccess = createAction(
  GET_ALL_LAUNCHES_SUCCESS,
  props<{ launches: Paginator<Launch> }>()
);
export const getAllLaunchesFail = createAction(
  GET_ALL_LAUNCHES_FAIL,
  httpErrorProps
);

export const getAllLaunchesByQuery = createAction(
  GET_ALL_LAUNCHES_BY_QUERY,
  props<{ query: QueryModel, page: number, size: number }>()
);
export const getAllLauchesByQuerySuccess = createAction(
  GET_ALL_LAUNCHES_BY_QUERY_SUCCESS,
  props<{ launches: Paginator<Launch> }>()
);
export const getAllLaunchesByQueryFail = createAction(
  GET_ALL_LAUNCHES_BY_QUERY_FAIL,
  httpErrorProps
);
