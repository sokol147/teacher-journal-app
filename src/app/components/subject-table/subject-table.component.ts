import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Subject } from "src/app/common/entities";
import { ButtonType, Button } from "../../shared/components/button/button.model";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-subject-table",
  templateUrl: "./subject-table.component.html",
  styleUrls: ["./subject-table.component.scss"]
})
export class SubjectTableComponent implements OnInit {

  private subject: Subject;

  private button: Button = {
    class: ButtonType.Save
  };

  private buttonPlus: Button = {
    class: ButtonType.Plus
  };
  public subject$: Observable<Subject>;

  constructor(
    private _store: Store<any>,
    private route: ActivatedRoute,
  ) {
    const name: string = this.route.snapshot.paramMap.get("name");
    this.subject$ = _store.select(state => {
      this.subject = state.journal.subjects.find(subject => subject.name === name);
      return state.journal.subjects.find(subject => subject.name === name);
    });
  }

  public ngOnInit(): void {}

  public addDay(): void {
    this.subject.date.push("");
    this.subject.students.forEach(student => {
      student.marks.push({ day: "", mark: "" });
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

  public saveSubject(): void {}
}
