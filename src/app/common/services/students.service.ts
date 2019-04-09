import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Student } from "../entities";
import { STUDENTS } from "../../mock-students";

@Injectable({
  providedIn: "root"
})
export class StudentService {

  public getStudents(): Observable<Student[]> {
    return of(STUDENTS);
  }

  public addStudent(student: Student): Student[] {
    student.id = STUDENTS.length + 1;
    STUDENTS.push(student);
    return STUDENTS;
  }

}
