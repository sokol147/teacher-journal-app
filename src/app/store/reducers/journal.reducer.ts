import { STUDENTS } from 'src/app/mock-students';
import { SUBJECTS } from 'src/app/mock-subjects';
import { Actions, ADD_STUDENT, ADD_SUBJECT } from '../actions/app.actions';
import { GetSubjectSuccess, ESubjectActions } from '../actions/subject.actions';

const localStudents = JSON.parse(localStorage.getItem("students"));
const localSubjects = JSON.parse(localStorage.getItem("subjects"));

const initialJournalState = {
  students: (localStudents === null) ? STUDENTS : localStudents,
  subjects: (localSubjects === null) ? SUBJECTS : localSubjects,
  selectedSubject: null
};

export const journalReducer = (
  state = initialJournalState,
  action: Actions
) => {
  switch(action.type){
    case ADD_STUDENT: {
      return {
        ...state,
        subjects: state.subjects,
        students: [ ...state.students, action.payload ]
      }
    }
    case ADD_SUBJECT: {
      return {
        ...state,
        subjects: [ ...state.subjects, action.payload ]
      }
    }
    case ESubjectActions.GetSubjectSuccess: {
      return {
        ...state,
        selectedSubject: action.payload
      }
    }
    default:
      return state;
  }
}