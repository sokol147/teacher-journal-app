import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { IFormField } from "./form.model";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent {

  @Input() public formFields: IFormField[];
  @Output() public submitted: EventEmitter<any> = new EventEmitter();

  public profileForm: any = new FormGroup({
    name: new FormControl(""),
    lastName: new FormControl(""),
    teacher: new FormControl(""),
    address: new FormControl(""),
    cabinet: new FormControl(""),
    description: new FormControl("")
  });

  public onSubmit(value: any): void {
    this.submitted.emit(value);
  }

}
