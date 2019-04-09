import { Component, OnInit, Input } from "@angular/core";
import { Subject, Button, Student } from "src/app/common/entities";

import { DbService } from "../../common/services/db.service";

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store'
import { ADD_SUBJECT } from '../../actions';

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent implements OnInit {

  @select() Subjects;

  private formInfo: object = {
    title: "Add new Subject",
    type: "subject",
    fields: [
      { label: "Name", isRequired: true, id: "name" },
      { label: "Teacher", isRequired: true, id: "teacher" },
      { label: "Cabinet", isRequired: false, id: "cabinet" }
    ]
  };

  public button: Button = {
    text: "+",
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
