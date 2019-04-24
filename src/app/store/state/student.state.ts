import { IStudent } from "../../common/entities";
import { STUDENTS } from "src/app/mock-students";

export interface IStudentState {
  students: IStudent[];
}

const localStudents: IStudent[] = JSON.parse(localStorage.getItem("students"));

export const initialStudentState: IStudentState = {
  students: (localStudents === null) ? STUDENTS : localStudents
};
