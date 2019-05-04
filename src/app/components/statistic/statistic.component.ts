import { Component, OnInit } from "@angular/core";
import { ISubject } from "src/app/common/entities";
import { FormBuilder, FormGroup } from "@angular/forms";

import { StatisticService } from "../../common/services/statistic.service";

import { Store } from "@ngrx/store";
import { IAppState } from "src/app/store/state/app.state";

import * as _ from "lodash/array";

@Component({
  selector: "app-statistic",
  templateUrl: "./statistic.component.html",
  styleUrls: ["./statistic.component.scss"],
})
export class StatisticComponent implements OnInit {

  public statisticForm = new FormGroup({});

  public subjects: ISubject[];
  public infoMessage: string;
  public result: any[];

  public subjectDates = [];
  public uniqDates = [];
  public chartData;
  constructor(
    private fb: FormBuilder,
    private statService: StatisticService,
    private _store: Store<IAppState>,
  ) {}

  public ngOnInit(): void {
    this._store.select("subjects", "subjects")
      .subscribe(data => this.subjects = data);

    this.statisticForm = this.fb.group({
      subject: null,
      date: null
    });
    this.onChanges();

    this.subjects.forEach(subject => {
      subject.date.forEach(day => {
        this.subjectDates.push(day);
      });
    });
    this.uniqDates = _.uniqBy(this.subjectDates, "day");
  }

  public onChanges(): void {
    this.statisticForm.valueChanges.subscribe(val => {
      this.renderStatistic(val.subject, val.date);
      this.renderChart(val.subject);
    });
  }

  public renderStatistic(subjects: ISubject[], day: string): void {
    this.statService.getStatistic(subjects, day)
      .subscribe(res => {
        this.result = res[0];
        this.infoMessage = res[1];
      });
  }
  public renderChart(subjects): void {
    this.statService.getChart(subjects)
      .subscribe(res => {
        this.chartData = res;
      });
  }
}
