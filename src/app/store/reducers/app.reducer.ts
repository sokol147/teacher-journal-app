import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { studentReducer } from './student.reducer';
import { subjectReducer } from './subject.reducer';
import { journalReducer } from './journal.reducer';

export const appReducer: ActionReducerMap<any> = {
  router: routerReducer,
  journal: journalReducer,
  students: studentReducer,
  subjects: subjectReducer
};
