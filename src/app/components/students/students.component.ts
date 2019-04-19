import { Component } from "@angular/core";
import { Student } from "../../common/entities";
import { ButtonType, Button } from "../../shared/components/button/button.model";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";

import * as AppActions from "../../store/actions/app.actions";

import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent {

  constructor(
    private _store: Store<any>,
    private tsService: TranslateService
  ) {
    this.students$ = _store.select(state => state.journal.students);
  }

  private button: Button = {
    class: ButtonType.Add
  };

  private formFields: any[] = [
    { label: "Name", isRequired: true, id: "name" },
    { label: "Last Name", isRequired: true, id: "lastName" },
    { label: "Address", isRequired: false, id: "address" }
  ];

  public students$: Observable<Array<Student>>;

  public path: string[] = ["students"];
  public order: number = -1;

  public addStudent(student: Student): void {
    let _student: Student = {
      id: student.id,
      name: student.name,
      lastName: student.lastName,
      description: student.description,
      address: student.address,
    };
    this._store.dispatch(new AppActions.AddStudent(_student));
  }

  public sortTable(prop: string): boolean {
    this.path = prop.split(".");
    this.order = this.order * (-1);
    return false;
  }

  public clearStudents(): void {}
}
