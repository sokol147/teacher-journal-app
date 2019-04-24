import { Subject } from "../../common/entities";
import { SUBJECTS } from "src/app/mock-subjects";

export interface ISubjectState {
  subjects: Subject[];
  selectedSubject: Subject;
}

const localSubjects: any = JSON.parse(localStorage.getItem("subjects"));

export const initialSubjectState: ISubjectState = {
  subjects: (localSubjects === null) ? SUBJECTS : localSubjects,
  selectedSubject: null
};
