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

  public getStatistic(subjects: ISubject[], day: string): Observable<any> {
    let result = [];
    let message: string = "";

    if(!subjects && !day) {
      result = [];
    }

    if(subjects && !day){
      message = this.tsService.instant("infoMessage");
      result = [];
    }

    if(subjects && day){
      subjects.forEach(subject => {
        let subjectResult = {
          name: subject.name,
          result: []
        }
        subject.students.forEach(student => {
          student.marks.forEach(date => {
            if(date.day === day && date.mark !== ""){
              subjectResult.result.push(
                {
                  name: student.name,
                  lastName: student.lastName,
                  mark: date.mark
                }
              )
            }
          })
        })
        result.push(subjectResult)
      })
    }

    return of([result, message]);
  }
}
