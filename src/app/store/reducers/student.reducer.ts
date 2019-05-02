import { EStudentActions, StudentActions } from "./../actions/student.actions";
import { initialStudentState, IStudentState } from "../state/student.state";

export const studentReducer = (
  state = initialStudentState,
  action: StudentActions
): IStudentState => {
  switch (action.type) {
    case EStudentActions.AddStudent: {
      action.payload.id = state.students.length + 1;
      localStorage.setItem("students", JSON.stringify([...state.students, action.payload]));
      return {
        ...state,
        students: [...state.students, action.payload]
      };
    }
    default:
      return state;
  }
};
