import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";

import { Student } from "../../common/entities";

import { DbService } from "../../common/services/db.service";

import { IAppState } from "../../store";
import { REMOVE_ALL_STUDENTS, ADD_STUDENT } from "../../actions";

import { ButtonType, Button } from "../../shared/components/button/button.module";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {

  private button: Button = {
    class: ButtonType.Add
  };

  private formFields: any[] = [
    { label: "Name", isRequired: true, id: "name" },
    { label: "Last Name", isRequired: true, id: "lastName" },
    { label: "Address", isRequired: false, id: "address" }
  ];

  @select() public students: Student[];

  public path: string[] = ["students"];
  public order: number = -1;

  constructor(
    private dbService: DbService,
    private ngRedux: NgRedux<IAppState>
  ) { }

  // public students: Student[];

  public ngOnInit(): void {
    // this.getStudents();
  }

  // public getStudents(): void {
  //   this.dbService.getStudents()
  //     .subscribe(students => this.students = students);
  // }

  public addStudent(student: Student): void {
    this.ngRedux.dispatch({type: ADD_STUDENT, student: student});

    // this.dbService.addStudent(student)
    //   .subscribe(students => this.students = students);
  }

  public sortTable(prop: string): boolean {
    this.path = prop.split(".");
    this.order = this.order * (-1);
    return false;
  }

  public clearStudents(): void {
    this.ngRedux.dispatch({type: REMOVE_ALL_STUDENTS});
  }
}
