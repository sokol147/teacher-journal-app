import { Component, OnInit, Input } from "@angular/core";

import { Student } from "../../common/entities";

import { StudentService } from "../../common/services/students.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {

  private formInfo: object = {
    title: "Add new Student",
    type: "student",
    fields: [
      { label: "Name", isRequired: true, id: "name" },
      { label: "Last Name", isRequired: true, id: "lastName" },
      { label: "Address", isRequired: false, id: "address" }
    ]
  };

  public students: Student[];

  constructor( private studentService: StudentService) { }

  public ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.students = this.studentService.getStudents();
  }

  public addStudent(student: Student): void {
    this.students = this.studentService.addStudent(student);
  }

  // @Input() students: Student[];
}
