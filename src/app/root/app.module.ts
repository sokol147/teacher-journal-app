import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StudentsComponent } from "../components/students/students.component";
import { SubjectsComponent } from "../components/subjects/subjects.component";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
