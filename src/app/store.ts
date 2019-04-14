import { Student, Subject } from "./common/entities";
import { ADD_STUDENT, ADD_SUBJECT, REMOVE_ALL_STUDENTS } from "./actions";
import { STUDENTS } from "./mock-students";
import { SUBJECTS } from "./mock-subjects";

export interface IAppState {
  students: Student[];
  subjects: Subject[];
}

export const INITIAL_STATE: IAppState = {
  students: STUDENTS,
  subjects: SUBJECTS
};

export function rootReducer(state: IAppState, action: any): IAppState {
  switch (action.type) {
    case ADD_STUDENT:
      action.student.id = state.students.length + 1;
      state.subjects.forEach(subject => {
        subject.students.push({
          name: action.student.name,
          lastName: action.student.lastName,
          averageMark: undefined,
          marks: [
            {
              day: "",
              mark: ""
            }
          ]
        });
      });
      return Object.assign({}, state, {
        subjects: state.subjects,
        students: state.students.concat(Object.assign({}, action.student))
      });

    case ADD_SUBJECT:
      action.subject.id = state.subjects.length + 1;
      action.subject.date = [ "" ];
      action.subject.students = [];
      state.students.forEach(student => {
        action.subject.students.push({
          name: student.name,
          lastName: student.lastName,
          averageMark: undefined,
          marks: [
            {
              day: "",
              mark: ""
            }
          ]
        });
      });
      return Object.assign({}, state, {
        subjects: state.subjects.concat(Object.assign({}, action.subject))
      });

    case REMOVE_ALL_STUDENTS:
      return Object.assign({}, state, {
        students: []
      });

    default:
      return state;
  }
  return state;
}
