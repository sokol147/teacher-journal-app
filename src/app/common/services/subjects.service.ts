import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SubjectService {

  public getCurrentDate(): Observable<string> {
    let d: Date = new Date();
    let currentMonth: string = (d.getMonth() + 1).toString();
    if (currentMonth.length === 1) { currentMonth = `0${currentMonth}`; }
    let currentDay: string = d.getDate().toString();
    if (currentDay.length === 1) { currentDay = `0${currentDay}`; }
    let currentDate: string = `${currentMonth}/${currentDay}`;
    return of(currentDate);
  }
}
