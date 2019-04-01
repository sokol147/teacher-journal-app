import { Component, OnInit, Input } from "@angular/core";
import { Subject } from "src/common/entities";
import { SUBJECTS } from "src/app/mock-subjects";

import { SubjectService } from '../../../common/services/subjects.service';

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[];

  constructor( private subjectService: SubjectService) { }

  public ngOnInit() {
    this.getSubjects()
  }

  getSubjects(): void{
    this.subjectService.getSubjects()
      .subscribe(subjects => this.subjects = subjects)
  }

  // @Input() subjects: Subject[];
}
