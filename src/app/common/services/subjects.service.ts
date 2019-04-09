import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Subject } from "../../common/entities";
import { SUBJECTS } from "src/app/mock-subjects";

@Injectable({
  providedIn: "root"
})
export class SubjectService {

  public getSubjects(): Observable<Subject[]> {
    return of(SUBJECTS);
  }

  public addSubject(subject: Subject): Observable<Subject[]> {
    subject.id = SUBJECTS.length + 1;
    SUBJECTS.push(subject);
    return of(SUBJECTS);
  }

  public getSubject(name: string): Observable<Subject> {
    return of(SUBJECTS.find(subject => subject.name === name));
  }
}
