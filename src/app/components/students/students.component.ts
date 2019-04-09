import { Component, OnInit, Input } from "@angular/core";

import { Student } from '../../../common/entities';

import { StudentService } from '../../../common/services/students.service';

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor( private studentService: StudentService) { }

  public ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void{
    this.studentService.getStudents()
      .subscribe(students => this.students = students);
  }

  // @Input() students: Student[];
}
