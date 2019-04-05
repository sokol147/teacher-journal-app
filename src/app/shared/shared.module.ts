import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";

import { ButtonComponent } from "../shared/components/button/button.component";
import { FormComponent } from "../shared/components/form/form.component";

let sharedComponents: any[] = [ButtonComponent, FormComponent];

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ ...sharedComponents ],
  exports: [
    ...sharedComponents, CommonModule
  ]
})

export class SharedModule { }
