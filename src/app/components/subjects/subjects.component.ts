import { Component, OnInit, Input } from "@angular/core";
import { Subject, Button, Student } from "src/app/common/entities";

import { DbService } from "../../common/services/db.service";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent implements OnInit {

  button: Button = {
    text: '+',
    class: 'btn--add'
  }

  private formInfo: object = {
    title: "Add new Subject",
    type: "subject",
    fields: [
      { label: "Name", isRequired: true, id: "name" },
      { label: "Teacher", isRequired: true, id: "teacher" },
      { label: "Cabinet", isRequired: false, id: "cabinet" }
    ]
  };

  public subjects: Subject[];
  public studentsList: Student[];

  constructor( 
    private DbService: DbService
  ) { }

  public ngOnInit(): void {
    this.getSubjects();
    this.getStudents();
  }

  public getSubjects(): void {
    this.DbService.getSubjects()
      .subscribe(subjects => this.subjects = subjects);
  }

  public getStudents(): void {
    this.DbService.getStudents()
      .subscribe(students => this.studentsList = students);
  }

  public addSubject(subject: Subject): void {
    this.DbService.addSubject(subject)
      .subscribe(subjects => this.subjects = subjects);
  }
}
