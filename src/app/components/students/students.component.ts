import { Component, OnInit, Input} from "@angular/core";

import { Student, Button } from "../../common/entities";

import { StudentService } from "../../common/services/students.service";

import * as _ from 'lodash';

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {

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

  constructor( private studentService: StudentService) { }

  public ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  public addStudent(student: Student): void {
    this.students = this.studentService.addStudent(student);
  }

  // public onClick($event){
  //   $event.target.tagName === 'TH' ?
  //     _.sortBy(this.students, $event.target.id) :
  //     console.log('no')
  // }

  // @Input() students: Student[];
}
