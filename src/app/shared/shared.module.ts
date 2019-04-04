import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { ButtonComponent } from "../shared/components/button/button.component";
import { FormComponent } from "../shared/components/form/form.component";
import { SortingStudentsPipe } from './pipes/sorting-students.pipe';

let sharedComponents = [ButtonComponent, FormComponent]

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ ...sharedComponents, SortingStudentsPipe ],
  exports: [
    ...sharedComponents, CommonModule, SortingStudentsPipe
  ]
})

export class SharedModule { }
