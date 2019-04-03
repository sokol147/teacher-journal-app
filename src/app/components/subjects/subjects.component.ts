import { Component, OnInit, Input } from "@angular/core";
import { Subject } from "src/common/entities";
import { SUBJECTS } from "src/app/mock-subjects";

import { SubjectService } from "../../../common/services/subjects.service";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent implements OnInit {

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

  constructor( private subjectService: SubjectService) { }

  public ngOnInit(): void {
    this.getSubjects();
  }

  public getSubjects(): void {
    this.subjects = this.subjectService.getSubjects();
  }

  public addSubject(subject: Subject): void {
    this.subjects = this.subjectService.addSubject(subject);
  }

  // @Input() subjects: Subject[];
}
