import { Component, OnInit, Input } from "@angular/core";
import { Subject, Student } from "src/app/common/entities";
import { Button } from "../../shared/components/button/button.module";

import { DbService } from "../../common/services/db.service";

import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../../store";
import { ADD_SUBJECT } from "../../actions";

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

  @select() public subjects: Subject[];

  public button: Button = {
    class: "btn--add"
  };

  // public subjects: Subject[];
  // public studentsList: Student[];

  constructor(
    private dbService: DbService,
    private ngRedux: NgRedux<IAppState>
  ) { }

  public ngOnInit(): void {
    // this.getSubjects();
    // this.getStudents();
  }

  // public getSubjects(): void {
  //   this.dbService.getSubjects()
  //     .subscribe(subjects => this.subjects = subjects);
  // }

  // public getStudents(): void {
  //   this.dbService.getStudents()
  //     .subscribe(students => this.studentsList = students);
  // }

  public addSubject(subject: Subject): void {

    this.ngRedux.dispatch({type: ADD_SUBJECT, subject: subject});

    // this.dbService.addSubject(subject)
    //   .subscribe(subjects => this.subjects = subjects);
  }
}
