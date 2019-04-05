import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DATABASE } from '../../mock-db';
import { Student, Subject } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  public getStudents(): Observable<Student[]>{
    return of(DATABASE.students);
  }

  public addStudent(student): Observable<Student[]> {
    student.id = DATABASE.students.length + 1;
    DATABASE.students.push(student);
    DATABASE.subjects.forEach(subject =>{
      subject.students.push({
        name: student.name,
        lastName: student.lastName,
        averageMark: 0,
        marks: [
          {
            day: '06/01',
            mark: ''
          }
        ]
      })
    })
    return of(DATABASE.students);
  }

  public getSubjects(): Observable<Subject[]>{
    return of(DATABASE.subjects)
  }

  public addSubject(subject): Observable<Subject[]> {
    subject.id = DATABASE.subjects.length + 1;
    subject.date = [ '06/01' ];
    subject.students = [];
    DATABASE.students.forEach(student => {
      subject.students.push({
        name: student.name,
        lastName: student.lastName,
        averageMark: 0,
        marks: [
          {
            day: '06/01',
            mark: ''
          }
        ]
      })
    })
    DATABASE.subjects.push(subject);
    return of(DATABASE.subjects);
  }

  public getSubject(name: string): Observable<Subject> {
    return of(DATABASE.subjects.find(subject => subject.name === name))
  }
}
