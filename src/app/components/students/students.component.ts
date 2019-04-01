import { Component, OnInit, Input } from "@angular/core";
import { Student } from "../../../common/entities/index";

import { STUDENTS } from "../../../app/mock-students";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"]
})
export class StudentsComponent implements OnInit {

  public students: Student[] = STUDENTS;

  constructor() { }

  public ngOnInit(): void {

  }

  // @Input() students: Student[];
}
