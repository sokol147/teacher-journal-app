import { Component, OnInit } from "@angular/core";
import { IStudent } from "../../common/entities";
import { ButtonType, IButton } from "../../shared/components/button/button.model";

import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";

import { StudentService } from "src/app/common/services/students.service";
import { IFormField } from "src/app/shared/components/form/form.model";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
  providers: [ StudentService ]
})
export class StudentsComponent implements OnInit {

  private button: IButton = {
    class: ButtonType.Add
  };

  private formFields: IFormField[] = [
    { label: "Name", isRequired: true, id: "name" },
    { label: "Last Name", isRequired: true, id: "lastName" },
    { label: "Address", isRequired: false, id: "address" }
  ];

  public students: IStudent[];

  public path: string[] = ["students"];
  public order: number = -1;

  constructor(
    private _store: Store<IAppState>,
    private studentService: StudentService
  ) {}

  public ngOnInit(): void {
    this._store.select("students", "students")
      .subscribe(data => this.students = data);
  }

  public addStudent(student: IStudent): void {
    let _student: IStudent = {
      id: student.id,
      name: student.name,
      lastName: student.lastName,
      description: student.description,
      address: student.address,
    };
    this.studentService.addStudent(_student);
  }

  public sortTable(prop: string): boolean {
    this.path = prop.split(".");
    this.order = this.order * (-1);
    return false;
  }

}
