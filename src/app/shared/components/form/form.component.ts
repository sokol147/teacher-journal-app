import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { Student, Subject } from "../../../../common/entities";

import { StudentsComponent } from "../../../components/students/students.component";
import { SubjectsComponent } from "../../../components/subjects/subjects.component";

@Component({
  providers: [StudentsComponent, SubjectsComponent],
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {

  @Input() public info: any;

  public profileForm: any = new FormGroup({
    name: new FormControl(""),
    lastName: new FormControl(""),
    teacher: new FormControl(""),
    address: new FormControl(""),
    cabinet: new FormControl(""),
    description: new FormControl("")
  });

  constructor(
    private studentsComponent: StudentsComponent,
    private subjectsComponent: SubjectsComponent
  ) { }

  public ngOnInit(): any {}

  public onSubmit(type: string): void {
    let name: string = this.profileForm.value.name;
    let lastName: string = this.profileForm.value.lastName;
    let address: string = this.profileForm.value.address;
    let description: string = this.profileForm.value.description;
    let teacher: string = this.profileForm.value.teacher;
    let cabinet: number = this.profileForm.value.cabinet;

    type === "student" ?
      this.studentsComponent.addStudent({name, lastName, address, description} as Student) :
      this.subjectsComponent.addSubject({name, teacher, cabinet, description} as Subject);
  }

}
