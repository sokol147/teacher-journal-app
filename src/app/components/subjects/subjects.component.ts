import { Component, OnInit } from "@angular/core";
import { ISubject } from "src/app/common/entities";
import { ButtonType, IButton } from "../../shared/components/button/button.model";

import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";

import { AppComponent } from "src/app/root/app.component";
// import { AddSubject } from "src/app/store/actions/app.actions";
import { AddSubject } from "../../store/actions/subject.actions";
import { IFormField } from "src/app/shared/components/form/form.model";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent implements OnInit {

  private formFields: IFormField[] = [
    { label: "Name", isRequired: true, id: "name" },
    { label: "Teacher", isRequired: true, id: "teacher" },
    { label: "Cabinet", isRequired: false, id: "cabinet" }
  ];

  public button: IButton = {
    class: ButtonType.Add
  };

  public subjects;

  constructor(
    private _store: Store<IAppState>,
    private appComponent: AppComponent
  ) {}

  public ngOnInit(): void {
    this._store.select("subjects", "subjects")
      .subscribe(data => this.subjects = data);
  }

  public addSubject(subject: ISubject): void {
    let _subject: ISubject = {
      id: subject.id,
      name: subject.name,
      teacher: subject.teacher,
      cabinet: +subject.cabinet,
      description: subject.description,
      date: []
    };
    this._store.dispatch(new AddSubject(_subject));
    this.appComponent.createComponent("Subject successfuly added", "success");
  }
}
