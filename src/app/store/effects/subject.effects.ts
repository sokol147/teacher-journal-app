import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of, Observable } from "rxjs";
import { switchMap, map, withLatestFrom, tap } from "rxjs/operators";

import { ESubjectActions, GetSubject, GetSubjectSuccess, AddSubject } from "../actions/subject.actions";

import { selectSubjectList } from "../selectors/subject.selector";
import { ISubject } from "src/app/common/entities";

@Injectable()
export class SubjectEffects {
  @Effect()
  public getSubject$ = this._actions$.pipe(
    ofType<GetSubject>(ESubjectActions.GetSubject),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectSubjectList))),
    switchMap(([name, subjects]) => {
      const selectedSubject: ISubject = subjects.filter(subject => subject.name === name)[0];
      return of(new GetSubjectSuccess(selectedSubject));
    })
  );

  @Effect()
  public addSubject$: Observable<any> = this._actions$.pipe(
    ofType<AddSubject>(ESubjectActions.AddSubject),
    map(action => action.payload),
    withLatestFrom(this._store),
    switchMap(([subject, store]) => {
      subject.date = [];
      subject.students = [];
      store.students.students.forEach(student => {
        subject.students.push({
          name: student.name,
          lastName: student.lastName,
          averageMark: null,
          marks: []
        });
      });
      localStorage.setItem("subjects", JSON.stringify(store.subjects.subjects));
      return of();
    })
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<any>
  ) {}
}
