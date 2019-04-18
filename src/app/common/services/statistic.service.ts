import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import * as _ from "lodash";
import { Subject } from "../entities";

export interface ITmprStudent {
  name: string;
  lastName: string;
  mark: string;
}

@Injectable({
  providedIn: "root"
})

export class StatisticService {

  constructor() { }

  public getStatistic(subject: Subject, day: string): Observable<any> {
    let result: ITmprStudent[] = [];
    let message: string = "";
    if (subject !== undefined && day === null) {
      message = "chose date";
      result = [];
    }
    if (subject !== undefined && typeof(day) === "string") {
      message = (_.includes(subject.date, day)) ? "" :
        `${day} there was no ${subject.name}`;
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
