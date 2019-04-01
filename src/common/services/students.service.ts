import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

import { Student } from "../entities";
import { STUDENTS } from "../../app/mock-students";

@Injectable({
  providedIn: "root"
})
export class StudentService {

  getStudents(): Observable<Student[]> {
    return of(STUDENTS);
  }
}
