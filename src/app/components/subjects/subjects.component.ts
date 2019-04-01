import { Component, OnInit, Input } from "@angular/core";
import { Subject } from "src/common/entities";
import { SUBJECTS } from "src/app/mock-subjects";

@Component({
  selector: "app-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"]
})
export class SubjectsComponent implements OnInit {

  public subjects: Subject[] = SUBJECTS;

  constructor() { }

  public ngOnInit() {
  }

  // @Input() subjects: Subject[];
}
