import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule, MatSortModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./root/app.component";
import { StudentsComponent } from "./components/students/students.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { SubjectTableComponent } from "./components/subject-table/subject-table.component";

import { SortingStudentsPipe } from './common/pipes/sorting-students.pipe';
import { PartyTimePipe } from './common/pipes/party-tyme.pipe';

import { SharedModule } from "./shared/shared.module";
import { DefaultMarkPipe } from './common/pipes/default-mark.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsComponent,
    SubjectTableComponent,
    SortingStudentsPipe,
    PartyTimePipe,
    DefaultMarkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
