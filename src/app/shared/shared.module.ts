import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from '../shared/components/button/button.component';
import { FormComponent } from '../shared/components/form/form.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ButtonComponent, FormComponent ],
  exports: [
    ButtonComponent, FormComponent, CommonModule
  ]
})

export class SharedModule { }