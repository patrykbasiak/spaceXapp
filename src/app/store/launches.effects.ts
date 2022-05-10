import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LaunchingService } from '../shared/services/launching.service';
import * as Action from './launches.actions';
@Injectable()
export class LaunchesEffects {
  constructor(
    private actions$: Actions,
    private launchingService: LaunchingService
  ) {}

  getAllLaunches$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Action.getAllLaunches),
      switchMap((action) => {
        return this.launchingService
          .getAllLaunches(action.page, action.size)
          .pipe(
            map((launches) => {
              return Action.getAllLauchesSuccess({ launches });
            }),
            catchError((err) => {
              return of(Action.getAllLaunchesByQueryFail({ error: err }));
            })
          );
      })
    );
  });

  getLaunchesByQuery$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(Action.getAllLaunchesByQuery),
      switchMap((action) => {
        return this.launchingService
          .getLaunchesByQuerry(action.query, action.page, action.size)
          .pipe(
            map((launches) => {
              return Action.getAllLauchesByQuerySuccess({ launches });
            }),
            catchError((err) => {
              return of(Action.getAllLaunchesByQueryFail({ error: err }));
            })
          );
      })
    );
  });
}
