import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Subject } from "src/app/common/entities";
import { ButtonType, Button } from "../../shared/components/button/button.model";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { SubjectService } from "src/app/common/services/subjects.service";

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

  public currentDate: string;

  constructor(
    private _store: Store<any>,
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) {
    const name: string = this.route.snapshot.paramMap.get("name");
    this.subject$ = _store.select(state => {
      this.subject = state.journal.subjects.find(subject => subject.name === name);
      return state.journal.subjects.find(subject => subject.name === name);
    });
  }

  public ngOnInit(): void {}

  public addDay(): void {
    this.subjectService.getCurrentDate()
      .subscribe(date => this.currentDate = date);
    this.subject.date.push(this.currentDate);
    this.subject.students.forEach(student => {
      student.marks.push({ day: this.currentDate, mark: "" });
    });
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

  public saveSubject(): void {
    let currentSubj: string = this.subject.name;
    let localSubjects: Subject[] = JSON.parse(localStorage.getItem("subjects"));
    for (let i: number = 0; i < localSubjects.length; i++) {
      if (localSubjects[i].name === currentSubj) { localSubjects[i] = this.subject; }
    }
    localStorage.setItem("subjects", JSON.stringify(localSubjects));
  }
}
