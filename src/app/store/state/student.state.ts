import { Student } from "../../common/entities";
import { STUDENTS } from "src/app/mock-students";

export interface IStudentState {
  students: Student[];
}

const localStudents: Student[] = JSON.parse(localStorage.getItem("students"));

export const initialStudentState: IStudentState = {
  students: (localStudents === null) ? STUDENTS : localStudents
};
