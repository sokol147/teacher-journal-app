import { Component } from "@angular/core";
import { ISubject } from "src/app/common/entities";
import { ButtonType, IButton } from "../../shared/components/button/button.model";

import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";

import { AppComponent } from "src/app/root/app.component";
import { AddSubject } from "src/app/store/actions/app.actions";
import { selectSubjectList } from "src/app/store/selectors/subject.selector";
import { Observable } from "rxjs";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent {

  private formFields: any[] = [
    { label: "Name", isRequired: true, id: "name" },
    { label: "Teacher", isRequired: true, id: "teacher" },
    { label: "Cabinet", isRequired: false, id: "cabinet" }
  ];

  public button: IButton = {
    class: ButtonType.Add
  };

  public subjects$: Observable<ISubject[]> = this._store.pipe(select(selectSubjectList));

  constructor(
    private _store: Store<IAppState>,
    private appComponent: AppComponent
  ) {}

  public addSubject(subject: ISubject): void {
    let _subject: ISubject = {
      id: subject.id,
      name: subject.name,
      teacher: subject.teacher,
      cabinet: +subject.cabinet,
      description: subject.description
    };
    this._store.dispatch(new AddSubject(_subject));
    this.appComponent.createComponent("Subject successfuly added", "success");
  }
}
