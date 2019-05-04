import { createSelector, MemoizedSelector } from "@ngrx/store";

import { ISubjectState } from "../state/subject.state";
import { ISubject } from "src/app/common/entities";

const selectSubjects = (state) => state.subjects;

export const selectSubjectList: MemoizedSelector<any, any> = createSelector(
  selectSubjects,
  (state) => state.subjects
);

export const selectSelectedSubject: MemoizedSelector<any, ISubject> = createSelector(
  selectSubjects,
  (state: ISubjectState) => state.selectedSubject
);
