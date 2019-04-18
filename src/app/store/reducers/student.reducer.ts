import { Student } from "../../common/entities";

import * as StudentActions from "../actions/student.actions";
import { STUDENTS } from "src/app/mock-students";

const initialState: Student[] = STUDENTS;

export const studentReducer = (
  state: Student[] = initialState,
  action
) => {
  switch (action.type) {
    case StudentActions.ADD_STUDENT:
      action.payload.id = state.length + 1;
      return [...state, action.payload];

    default:
      return state;
  }
};
