import { DB, Student, Subject } from './common/entities';
import { DATABASE } from './mock-db';
import { ADD_STUDENT, ADD_SUBJECT, REMOVE_ALL_STUDENTS, GET_SUBJECT } from './actions';
import { STUDENTS } from './mock-students';
import { SUBJECTS } from './mock-subjects';

export interface IAppState {
  db: DB,
  Students: Student[],
  Subjects: Subject[]
}

export const INITIAL_STATE: IAppState = {
  db: DATABASE,
  Students: STUDENTS,
  Subjects: SUBJECTS
}

export function rootReducer(state, action) {
  switch(action.type) {
    case ADD_STUDENT:
      action.student.id = state.Students.length + 1;
      state.Subjects.forEach(subject => {
        subject.students.push({
          name: action.student.name,
          lastName: action.student.lastName,
          averageMark: 0,
          marks: [
            {
              day: "",
              mark: ""
            }
          ]
        })
      })
      return Object.assign({}, state, {
        Subjects: state.Subjects,
        Students: state.Students.concat(Object.assign({}, action.student))
      })

    case ADD_SUBJECT:
      action.subject.id = state.Subjects.length + 1;
      action.subject.date = [ "" ];
      action.subject.students = [];
      state.Students.forEach(student => {
        action.subject.students.push({
          name: student.name,
          lastName: student.lastName,
          averageMark: 0,
          marks: [
            {
              day: "",
              mark: ""
            }
          ]
        })
      })
      return Object.assign({}, state, {
        Subjects: state.Subjects.concat(Object.assign({}, action.subject))
      })

    case REMOVE_ALL_STUDENTS:
      return Object.assign({}, state, {
        Students: []
      })
  }
  return state;
}