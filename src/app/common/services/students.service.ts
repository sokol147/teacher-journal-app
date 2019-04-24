import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { IStudent } from "../entities";
import { STUDENTS } from "../../mock-students";

@Injectable({
  providedIn: "root"
})
export class StudentService {

  public getStudents(): Observable<IStudent[]> {
    return of(STUDENTS);
  }

  public addStudent(student: IStudent): Observable<IStudent[]> {
    student.id = STUDENTS.length + 1;
    STUDENTS.push(student);
    return of(STUDENTS);
  }

}
