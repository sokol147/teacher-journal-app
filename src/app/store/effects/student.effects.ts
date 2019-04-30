import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of, Observable } from "rxjs";
import { switchMap, map, withLatestFrom } from "rxjs/operators";

import { AddStudent, EStudentActions } from "../actions/student.actions";

@Injectable()
export class StudentEffects {
  @Effect()
   public addStudent$: Observable<any> = this._actions$.pipe(
    ofType<AddStudent>(EStudentActions.AddStudent),
    map(action => action.payload),
    withLatestFrom(this._store.select("subjects")),
    switchMap(([student, store]) => {
      store.subjects.forEach(subject => {
        let marks = [];
        subject.date.forEach(date => {
          marks.push({
            day: date,
            mark: ""
          });
        });
        subject.students.push({
          name: student.name,
          lastName: student.lastName,
          averageMark: null,
          marks: marks
        });
      });
      localStorage.setItem("subjects", JSON.stringify(store.subjects));
      return of();
    })
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<any>
  ) {}
}
