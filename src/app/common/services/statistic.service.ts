import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as _ from "lodash";
import { Subject } from "../entities";
import { TranslateService } from '@ngx-translate/core';

export interface ITmprStudent {
  name: string;
  lastName: string;
  mark: string;
}

@Injectable({
  providedIn: "root"
})

export class StatisticService {

  constructor(private tsService: TranslateService) { }

  public getStatistic(subject: Subject, day: string): Observable<any> {
    let result: ITmprStudent[] = [];
    let message: string = "";
    if (subject !== undefined && day === null) {
      message = this.tsService.instant('statistic.infoMessage')
      result = [];
    }
    if (subject !== undefined && typeof(day) === "string") {
      message = (_.includes(subject.date, day)) ? "" :
        `${day} ${this.tsService.instant('statistic.infoMessageNoSubject')} ${subject.name}`;
      result = [];
      subject.students.forEach(student => {
        student.marks.forEach(date => {
          if (date.day === day && date.mark !== "") { result.push(
            {
              name: student.name,
              lastName: student.lastName,
              mark: date.mark
            }
          );
          }
        });
      });
    }
    return of([result, message]);
  }
}
