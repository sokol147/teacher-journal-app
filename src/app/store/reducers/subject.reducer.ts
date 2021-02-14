import { ESubjectActions, SubjectActions } from "./../actions/subject.actions";
import { initialSubjectState, ISubjectState } from "../state/subject.state";

export const subjectReducer = (
  state = initialSubjectState,
  action: SubjectActions
): ISubjectState => {
  switch (action.type) {
    case ESubjectActions.AddSubject: {
      action.payload.id = state.subjects.length + 1;
      return {
        ...state,
        subjects: [...state.subjects, action.payload],
      };
    }
    case ESubjectActions.GetSubjectSuccess: {
      return {
        ...state,
        selectedSubject: action.payload
      };
    }
    default:
      return state;
  }
};
