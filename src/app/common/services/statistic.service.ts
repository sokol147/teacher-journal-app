import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as _ from "lodash/collection";
import { ISubject } from "../entities";
import { TranslateService } from "@ngx-translate/core";

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

  public getStatistic(subject: ISubject, day: string): Observable<any> {
    let result: ITmprStudent[] = [];
    let message: string = "";

    if (subject === null) { result = []; }
    if (subject && day === null) {
      message = this.tsService.instant("infoMessage");
      result = [];
    }
    if (subject && typeof day === "string") {
      message = (_.some(subject.date, {day})) ? "" :
        `${day} ${this.tsService.instant("infoMessageNoSubject")} ${subject.name}`;
      result = [];
      subject.students.forEach(student => {
        student.marks.forEach(date => {
          if (date.day === day && date.mark !== "") {
            result.push(
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
