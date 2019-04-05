import { Component, OnInit, Input } from "@angular/core";

import { Student, Button } from "../../common/entities";

import { DbService } from "../../common/services/db.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {

  path: string[] = ['students'];
  order: number = -1;

  constructor( 
    private DbService: DbService
  ) { }

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
  }

  public getStudents(): void {
    this.DbService.getStudents()
      .subscribe(students => this.students = students);
  }

  public addStudent(student: Student): void {
    this.DbService.addStudent(student)
      .subscribe(students => this.students = students);
  }
}
