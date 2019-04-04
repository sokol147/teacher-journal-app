import { Component, OnInit, Input, ViewChild} from "@angular/core";

import { Student, Button } from "../../common/entities";

import { StudentService } from "../../common/services/students.service";

import { MatSort, MatSortable, MatTableDataSource } from "@angular/material";

import * as _ from 'lodash';

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {

  path: string[] = ['students'];
  order: number = -1;

  // private sort: MatSort;
  // @ViewChild(MatSort) set matSort(ms: MatSort){
  //   this.sort = ms;
  //   this.setDataSourceAttributes();
  // }
  // dataSource;
  // displayedColumns = ['id', 'name', 'lastName', 'address', 'description'];

  // setDataSourceAttributes() {
  //   this.dataSource.sort = this.sort;
  // }

  constructor( private studentService: StudentService) { }

  private button: Button = {
    text: '+',
    class: 'btn--add'
  }

  private formInfo: any = {
    title: "Add new Student",
    type: "student",
    fields: [
      { label: "Name", isRequired: true, id: "name" },
      { label: "Last Name", isRequired: true, id: "lastName" },
      { label: "Address", isRequired: false, id: "address" }
    ]
  };

  public students: Student[];

  sortTable(prop: string){
    this.path = prop.split('.');
    this.order = this.order * (-1);
    return false;
  }

  public ngOnInit(): void {
    this.getStudents();
    // this.dataSource = new MatTableDataSource(this.students);
    // this.dataSource.sort = this.sort;
  }

  public getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  public addStudent(student: Student): void {
    this.students = this.studentService.addStudent(student);
  }
}
