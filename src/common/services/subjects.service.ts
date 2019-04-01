import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Subject } from '../../common/entities';
import { SUBJECTS } from 'src/app/mock-subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  getSubjects(): Observable<Subject[]> {
    return of(SUBJECTS)
  }
}
