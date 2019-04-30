import { Injectable } from "@angular/core";
import { IAppState } from "src/app/store/state/app.state";
import { Store, select } from "@ngrx/store";
// import { AddStudent } from "src/app/store/actions/app.actions";
import { AddStudent } from "../../store/actions/student.actions";
import { AppComponent } from "src/app/root/app.component";
import { IStudent } from "../entities";

@Injectable({
  providedIn: "root"
})
export class StudentService {

  constructor(
    private _store: Store<IAppState>,
    private appComponent: AppComponent
  ) {}

  public addStudent(student: IStudent): void {
    this._store.dispatch(new AddStudent(student));
    this.appComponent.createComponent("Student successfuly added", "success");
  }

}
