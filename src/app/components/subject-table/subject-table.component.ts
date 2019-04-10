import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Subject } from "src/app/common/entities";
import { Button } from "../../shared/components/button/button.module";

import { DbService } from "../../common/services/db.service";
import { select } from "@angular-redux/store";
import { Observable } from "rxjs";
import { ButtonType } from "../../shared/components/button/button.module";

@Component({
  selector: "app-subject-table",
  templateUrl: "./subject-table.component.html",
  styleUrls: ["./subject-table.component.scss"]
})
export class SubjectTableComponent implements OnInit {

  private button: Button = {
    class: ButtonType.Save
  };

  private buttonPlus: Button = {
    class: ButtonType.Plus
  };

  @select(["subjects"]) public subjects$: Observable<any>;

  public subject: Subject;

  constructor(
    private route: ActivatedRoute,
    private dbService: DbService,
  ) {}

  public ngOnInit(): void {
    // this.getSubject();
    const name: string = this.route.snapshot.paramMap.get("name");
    this.subjects$.subscribe((subjects) => {
      this.subject = subjects.find(subject => subject.name === name);
    });
  }

  // public getSubject(): void {
  //   const name: string = this.route.snapshot.paramMap.get("name");
  //   // this.dbService.getSubject(name)
  //   //   .subscribe(subject => this.subject = subject);
  // }

  public addDay(): void {
    this.subject.date.push("");
    this.subject.students.forEach(student => {
      student.marks.push({
        day: "",
        mark: ""
      });
    });
    console.log(this.subject);
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
