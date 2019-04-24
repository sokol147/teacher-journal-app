import { Student } from "./student";
import { Subject } from "./subject";
export interface DB {
  students: Student[];
  subjects: Subject[];
}
