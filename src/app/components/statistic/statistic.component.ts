import { Component, OnInit } from "@angular/core";
import { ISubject } from "src/app/common/entities";
import { FormBuilder, FormGroup } from "@angular/forms";

import { StatisticService } from "../../common/services/statistic.service";

import { Store } from "@ngrx/store";
import { IAppState } from "src/app/store/state/app.state";

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
  constructor(
    private fb: FormBuilder,
    private statService: StatisticService,
    private _store: Store<IAppState>
  ) {}

  public ngOnInit(): void {
    this._store.select("subjects", "subjects")
      .subscribe(data => this.subjects = data);

    this.statisticForm = this.fb.group({
      subject: null,
      date: null
    });
    this.onChanges();
  }

  public onChanges(): void {
    this.statisticForm.valueChanges.subscribe(val => {
      this.renderStatistic(val.subject, val.date);
    });
  }

  public renderStatistic(subject: ISubject, day: string): void {
    this.statService.getStatistic(subject, day)
      .subscribe(res => {
        this.result = res[0];
        this.infoMessage = res[1];
      });
  }
}
