import { ISubject } from "../../common/entities";
import { SUBJECTS } from "src/app/mock-subjects";

export interface ISubjectState {
  subjects: ISubject[];
  selectedSubject: ISubject;
}

const localSubjects: ISubject[] = JSON.parse(localStorage.getItem("subjects"));

export const initialSubjectState: ISubjectState = {
  subjects: (localSubjects === null) ? SUBJECTS : localSubjects,
  selectedSubject: null
};
