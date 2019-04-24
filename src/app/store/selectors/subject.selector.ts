import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ISubjectState } from '../state/subject.state';

const selectSubjects = (state) => state.journal;

export const selectSubjectList = createSelector(
  selectSubjects,
  (state) => state.subjects
);

export const selectSelectedSubject = createSelector(
  selectSubjects,
  (state: ISubjectState) => state.selectedSubject
);