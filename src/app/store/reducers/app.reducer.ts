import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";
import { studentReducer } from "./student.reducer";
import { subjectReducer } from "./subject.reducer";

export const appReducer: ActionReducerMap<any> = {
  router: routerReducer,
  students: studentReducer,
  subjects: subjectReducer,
};
