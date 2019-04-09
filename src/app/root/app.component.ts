import { Component } from "@angular/core";
import { Student } from "../../common/entities/index";
import { Subject } from "../../common/entities/index";
import { STUDENTS } from "../mock-students";
import { SUBJECTS } from "../mock-subjects";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public title = "Teacher Journal";

  public students: Student[] = STUDENTS;

  public subjects: Subject[] = SUBJECTS;
}
