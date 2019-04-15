import * as AppActions from "../actions/app.actions";
import { STUDENTS } from "src/app/mock-students";
import { SUBJECTS } from "src/app/mock-subjects";
import { IAppState } from "../state/app.state";

const localStudents = JSON.parse(localStorage.getItem("students"));
const localSubjects = JSON.parse(localStorage.getItem("subjects"));

const initialAppState = {
  students: (localStudents === null) ? STUDENTS : localStudents,
  subjects: (localSubjects === null) ? SUBJECTS : localSubjects,
};

export function reducer(state = initialAppState, action: AppActions.Actions) {
  switch (action.type) {
    case AppActions.ADD_STUDENT:
      action.payload.id = state.students.length + 1;
      state.subjects.forEach(subject => {
        subject.students.push({
          name: action.payload.name,
          lastName: action.payload.lastName,
          averageMark: undefined,
          marks: [{ day: "", mark: "" }]
        });
      });
      localStorage.setItem("subjects", JSON.stringify(state.subjects));
      localStorage.setItem("students", JSON.stringify([ ...state.students, action.payload ]));
      return Object.assign({}, state, {
        subjects: state.subjects,
        students: [ ...state.students, action.payload ]
      });
    case AppActions.ADD_SUBJECT:
      action.payload.id = state.subjects.length + 1;
      action.payload.date = [ "" ];
      action.payload.students = [];
      state.students.forEach(student => {
        action.payload.students.push({
          name: student.name,
          lastName: student.lastName,
          averageMark: undefined,
          marks: [{ day: "", mark: "" }]
        });
      });
      localStorage.setItem("subjects", JSON.stringify([ ...state.subjects, action.payload ]));
      return Object.assign({}, state, {
        subjects: [ ...state.subjects, action.payload ]
      });
    default:
      return state;
  }
}
