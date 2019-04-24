import { Component } from "@angular/core";
import { IStudent } from "../../common/entities";
import { ButtonType, IButton } from "../../shared/components/button/button.model";

import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";

import { AddStudent } from "../../store/actions/app.actions";

import {AppComponent } from "../../root/app.component";
import { selectStudentList } from "src/app/store/selectors/student.selector";
import { Observable } from 'rxjs';
import { IStudentState } from 'src/app/store/state/student.state';

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent {

  private button: IButton = {
    class: ButtonType.Add
  };

  private formFields: any[] = [
    { label: "Name", isRequired: true, id: "name" },
    { label: "Last Name", isRequired: true, id: "lastName" },
    { label: "Address", isRequired: false, id: "address" }
  ];

  public students$: Observable<IStudentState> = this._store.pipe(select(selectStudentList));

  public path: string[] = ["students"];
  public order: number = -1;

  constructor(
    private _store: Store<IAppState>,
    private appComponent: AppComponent
  ) {}

  public addStudent(student: IStudent): void {
    let _student: IStudent = {
      id: student.id,
      name: student.name,
      lastName: student.lastName,
      description: student.description,
      address: student.address,
    };
    this._store.dispatch(new AddStudent(_student));
    this.appComponent.createComponent("Student successfuly added", "success");
  }

  public sortTable(prop: string): boolean {
    this.path = prop.split(".");
    this.order = this.order * (-1);
    return false;
  }

}
