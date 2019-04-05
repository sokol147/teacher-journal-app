import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Subject, Button } from "src/app/common/entities";

import { StudentService } from "../../common/services/students.service";
import { DbService } from "../../common/services/db.service";

@Component({
  selector: "app-subject-table",
  templateUrl: "./subject-table.component.html",
  styleUrls: ["./subject-table.component.scss"]
})
export class SubjectTableComponent implements OnInit {

  public button: Button = {
    text: "save",
    class: "btn--save"
  };

  public subject: Subject;

  constructor(
    private route: ActivatedRoute,
    private dbService: DbService
  ) {}

  public ngOnInit(): void {
    this.getSubject();
  }

  public getSubject(): void {
    const name: string = this.route.snapshot.paramMap.get("name");
    this.dbService.getSubject(name)
      .subscribe(subject => this.subject = subject);
  }

  public addDay(): void {
    this.subject.date.push("Enter date");
    this.subject.students.forEach(student => {
      student.marks.push({
        day: "",
        mark: ""
      });
    });
    // console.log(this.subject)
  }

  public calcAverage(): void {
    this.subject.students.forEach(student => {
      let marksSum: number = 0;
      let markCounter: number = 0;
      student.marks.forEach(mark => {
        if (+mark.mark !== 0) {
          marksSum += +mark.mark;
          markCounter++;
        }
      });
      let result: string = (marksSum / markCounter).toFixed(1);
      student.averageMark = result;
    });
  }
}
