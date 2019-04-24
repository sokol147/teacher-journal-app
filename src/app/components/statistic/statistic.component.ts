import { Component, OnInit } from "@angular/core";
import { Subject } from "src/app/common/entities";
import { FormBuilder, FormGroup } from "@angular/forms";

import { StatisticService } from "../../common/services/statistic.service";

@Component({
  selector: "app-statistic",
  templateUrl: "./statistic.component.html",
  styleUrls: ["./statistic.component.scss"],
})
export class StatisticComponent implements OnInit {

  public statisticForm = new FormGroup({});

  public subjects: Subject[];
  public infoMessage: string;
  public result = [];

  constructor(
    private fb: FormBuilder,
    private statService: StatisticService
    ) {
  }

  public ngOnInit(): void {
    this.subjects = JSON.parse(localStorage.getItem("subjects"));
    this.statisticForm = this.fb.group({
      subject: "",
      date: null
    });
    this.onChanges();
  }

  public onChanges(): void {
    this.statisticForm.valueChanges.subscribe(val => {
      this.renderStatistic(val.subject, val.date);
    });
  }

  public renderStatistic(subject: Subject, day: string): void {
    this.statService.getStatistic(subject, day)
      .subscribe(res => {
        this.result = res[0];
        this.infoMessage = res[1];
      });
  }
}
