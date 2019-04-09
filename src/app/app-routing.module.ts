import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentsComponent } from "./components/students/students.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { SubjectTableComponent } from './components/subject-table/subject-table.component';

const routes: Routes = [
  { path: "", redirectTo: "/students", pathMatch: "full"},
  { path: "students", component: StudentsComponent },
  { path: "subjects", component: SubjectsComponent },
  { path: "subject/:name", component: SubjectTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
