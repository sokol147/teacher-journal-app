import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentsComponent } from "./components/students/students.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";

const routes: Routes = [
  { path: "", redirectTo: "/students", pathMatch: "full"},
  { path: "students", component: StudentsComponent },
  { path: "subjects", component: SubjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
