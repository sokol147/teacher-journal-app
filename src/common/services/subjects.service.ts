import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Subject } from "../../common/entities";
import { SUBJECTS } from "src/app/mock-subjects";

@Injectable({
  providedIn: "root"
})
export class SubjectService {

  public getSubjects(): Subject[] {
    return SUBJECTS;
  }

  public addSubject(subject: Subject): Subject[] {
    subject.id = SUBJECTS.length + 1;
    SUBJECTS.push(subject);
    return SUBJECTS;
  }
}
