import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IStudentState } from '../state/student.state';

const selectStudents = (state: IAppState) => state.journal.students;

export const selectStudentList = createSelector(
  selectStudents,
  (state) => state
);