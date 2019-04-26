import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { IStudent } from "../entities";
import { STUDENTS } from "../../mock-students";
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { AddStudent } from 'src/app/store/actions/app.actions';
import { AppComponent } from 'src/app/root/app.component';
import { selectStudentList } from 'src/app/store/selectors/student.selector';

@Injectable({
  providedIn: "root"
})
export class StudentService {

  constructor(
    private _store: Store<IAppState>,
    private appComponent: AppComponent
  ) {}

  studentList
  public getStudents(): Observable<any> {
    // this._store.select('journal', 'students')
    //   .subscribe(data => this.studentList = data);
    // return of(this.studentList)
    return of(this._store.pipe(select(selectStudentList)));
  }

  public addStudent(student): void{
    this._store.dispatch(new AddStudent(student));
    this.appComponent.createComponent("Student successfuly added", "success");
  }

}
