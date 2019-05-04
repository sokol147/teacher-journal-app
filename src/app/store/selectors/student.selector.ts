import { createSelector, MemoizedSelector } from "@ngrx/store";

import { IAppState } from "../state/app.state";
import { IStudentState } from "../state/student.state";

const selectStudents = (state: IAppState): IStudentState => state.students;

export const selectStudentList: MemoizedSelector<IAppState, IStudentState> = createSelector(
  selectStudents,
  (state) => state
);
