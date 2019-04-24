import { IStudent } from "./student";
import { ISubject } from "./subject";
export interface IDB {
  students: IStudent[];
  subjects: ISubject[];
}
