import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';

import { ESubjectActions, GetSubject, GetSubjectSuccess, AddSubject } from '../actions/subject.actions';

import { selectSubjectList } from '../selectors/subject.selector';

@Injectable()
export class SubjectEffects {
  @Effect()
  getSubject$ = this._actions$.pipe(
    ofType<GetSubject>(ESubjectActions.GetSubject),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectSubjectList))),
    switchMap(([name, subjects]) => {
      const selectedSubject = subjects.filter(subject => subject.name === name)[0];
      return of(new GetSubjectSuccess(selectedSubject));
    })
  )

  constructor(
    private _actions$: Actions,
    private _store: Store<any>
  ) {}
}
