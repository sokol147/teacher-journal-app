import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Student } from "../entities";
import { STUDENTS } from "../../app/mock-students";

@Injectable({
  providedIn: "root"
})
export class StudentService {

  public getStudents(): Student[] {
    return STUDENTS;
  }

  public addStudent(student: Student): Student[] {
    student.id = STUDENTS.length + 1;
    STUDENTS.push(student);
    return STUDENTS;
  }

}
