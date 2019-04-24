import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';

import { AddSubject, AddStudent } from '../actions/app.actions';

@Injectable()
export class JournalEffects {
  @Effect()
  addSubject$ = this._actions$.pipe(
    ofType<AddSubject>('[SUBJECT] Add Subject'),
    map(action => action.payload),
    withLatestFrom(this._store.select('journal')),
    switchMap(([subject, store]) => {
      subject.id = store.subjects.length;
      subject.date = [];
      subject.students = [];
      store.students.forEach(student => {
        subject.students.push({
          name: student.name,
          lastName: student.lastName,
          averageMark: undefined,
          marks: []
        });
      });
      localStorage.setItem("subjects", JSON.stringify(store.subjects));
      return of()
    })
  )

  @Effect()
   addStudent$ = this._actions$.pipe(
    ofType<AddStudent>('[STUDENT] Add Student'),
    map(action => action.payload),
    withLatestFrom(this._store.select('journal')),
    switchMap(([student, store]) => {
      student.id = store.students.length;
      store.subjects.forEach(subject => {
        let marks = []
        subject.date.forEach(date => {
          marks.push({
            day: date,
            mark: ''
          })
        })
        subject.students.push({
          name: student.name,
          lastName: student.lastName,
          averageMark: undefined,
          marks: marks
        });
      });
      localStorage.setItem("subjects", JSON.stringify(store.subjects));
      localStorage.setItem("students", JSON.stringify(store.students));
      return of();
    })
  )

  constructor(
    private _actions$: Actions,
    private _store: Store<any>
  ) {}
}