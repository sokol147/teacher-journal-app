import { Component, OnInit } from "@angular/core";
import { Subject } from "src/app/common/entities";
import { ButtonType, Button } from "../../shared/components/button/button.model";

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";

import * as AppActions from "../../store/actions/app.actions";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent implements OnInit {

  private formFields: any[] = [
    { label: "Name", isRequired: true, id: "name" },
    { label: "Teacher", isRequired: true, id: "teacher" },
    { label: "Cabinet", isRequired: false, id: "cabinet" }
  ];

  public subjects$: Observable<any>;

  public button: Button = {
    class: ButtonType.Add
  };

  constructor(
    private _store: Store<any>
  ) {
    this.subjects$ = _store.select(state => {
      return state.journal.subjects;
    });
  }

  public ngOnInit(): void {}

  public addSubject(subject: Subject): void {
    let _subject: Subject = {
      id: subject.id,
      name: subject.name,
      teacher: subject.teacher,
      cabinet: +subject.cabinet,
      description: subject.description
    };
    this._store.dispatch(new AppActions.AddSubject(_subject));
  }
}
