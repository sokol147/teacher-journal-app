import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ISubject } from "src/app/common/entities";
import { ButtonType, IButton } from "../../shared/components/button/button.model";

import { Store } from "@ngrx/store";
import { SubjectService } from "src/app/common/services/subjects.service";
import { AppComponent } from "src/app/root/app.component";
import { GetSubject } from "src/app/store/actions/subject.actions";
import { IAppState } from "src/app/store/state/app.state";
import * as _ from "lodash/lang";

@Component({
  selector: "app-subject-table",
  templateUrl: "./subject-table.component.html",
  styleUrls: ["./subject-table.component.scss"]
})
export class SubjectTableComponent implements OnInit {

  private subjects$;
  private selectedSubject$;

  private button: IButton = {
    class: ButtonType.Save
  };
  private buttonPlus: IButton = {
    class: ButtonType.Plus
  };

  private currentDate: string;

  constructor(
    private _store: Store<IAppState>,
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private appComponent: AppComponent
  ) {}

  public ngOnInit(): void {
    this._store.dispatch(new GetSubject(this.route.snapshot.params.name));
    this._store.select("subjects", "selectedSubject")
      .subscribe(data => this.selectedSubject$ = data);
    this._store.select("subjects", "subjects")
      .subscribe(data => this.subjects$ = data);
  }

  public addDay(): void {
    this.subjectService.getCurrentDate()
      .subscribe(date => this.currentDate = date);

    this.selectedSubject$.date.push({day: this.currentDate});
    this.selectedSubject$.students.forEach(student => {
      student.marks.push({ day: this.currentDate, mark: "" });
    });
  }

  public calcAverage(): void {
    this.selectedSubject$.students.forEach(student => {
      let marksSum: number = 0;
      let markCounter: number = 0;
      student.marks.filter(item => +item.mark !== 0).forEach(item => {
        marksSum += +item.mark;
        markCounter++;
      });
      let result: string = (marksSum / markCounter).toFixed(1);
      student.averageMark = result;
    });
  }

  public saveSubject(): void {
    let initialSubjectsState: ISubject[] = JSON.parse(localStorage.getItem("subjects"));
    if (_.isEqual(initialSubjectsState, this.subjects$)) {
      this.appComponent.createComponent("Nothing is changed", "error");
    } else {
      localStorage.setItem("subjects", JSON.stringify(this.subjects$));
      this.appComponent.createComponent("Saved", "success");
    }
  }

  public onDateChange(): void {
    this.selectedSubject$.students.forEach(student => {
      student.marks.forEach((mark, idx) => {
        mark.day = this.selectedSubject$.date[idx].day;
      });
    });
  }

}
